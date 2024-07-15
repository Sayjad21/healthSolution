const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const pool = require('./db'); // db.js file
const port = 3000;

app.use(cors());
app.use(express.json());

// Routes will be added later
// app.get('/getDoctors', async (req, res) => {
//   try {
//     const allDoctors = await pool.query('SELECT * FROM doctors');
//     res.json(allDoctors.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });


// CREATE TABLE exercises (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   type VARCHAR(50) NOT NULL,
//   description TEXT,
//   muscle_groups VARCHAR(255),
//   equipment_needed VARCHAR(100),
//   difficulty_level VARCHAR(50),
//   duration VARCHAR(50),
//   video_url VARCHAR(255),
//   calories_burned DECIMAL(5,2)
// );

// Create table user_choice_exercise (
//   id SERIAL PRIMARY KEY,
//   user_id INT NOT NULL,
//   preferred_type VARCHAR(50) NOT NULL,
//   muscle_groups VARCHAR(255)
//   -- FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
// );


// CREATE TABLE recommendations (
//   id SERIAL PRIMARY KEY,
//   height_range VARCHAR(50) NOT NULL,
//   weight_range VARCHAR(50) NOT NULL,
//   age_range VARCHAR(50) NOT NULL,
//   gender VARCHAR(50) NOT NULL,
//   bmi_range VARCHAR(50) NOT NULL,
//   exercise_id INT NOT NULL,
//   sets_or_duration VARCHAR(50),
//   FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE

// );



app.post('/userpreference', async (req, res) => {
  const client = await pool.connect();
  try {
    const { userID, height, weight, age, gender, bmi, exerciseType, muscleGroup } = req.body;

    // Check if the user preference already exists
    const checkQuery = `
          SELECT * FROM user_choice_exercise 
          WHERE user_id = $1 AND preferred_type = $2 AND muscle_groups = $3;
      `;
    const checkResult = await client.query(checkQuery, [userID, exerciseType, muscleGroup]);

    // If not exists, insert into user_choice_exercise
    if (checkResult.rows.length === 0) {
      const insertQuery = `
              INSERT INTO user_choice_exercise (user_id, preferred_type, muscle_groups)
              VALUES ($1, $2, $3)
              RETURNING *;
          `;
      await client.query(insertQuery, [userID, exerciseType, muscleGroup]);
    }

    // Query to retrieve recommendations based on user attributes
    const recommendationQuery = `
            SELECT 
                uce.id AS user_choice_id,
                uce.user_id,
                uce.preferred_type,
                uce.muscle_groups,
                e.id AS exercise_id,
                e.name AS exercise_name,
                e.type AS exercise_type,
                e.muscle_groups AS exercise_muscle_groups,
                e.equipment_needed,
                e.description,
                e.difficulty_level,
                e.video_url,
                r.id,
                r.height_range,
                r.weight_range,
                r.age_range,
                r.gender,
                r.bmi_range,
                r.sets_or_duration
            FROM 
                user_choice_exercise uce
            JOIN 
                exercises e ON uce.preferred_type ILIKE e.type AND uce.muscle_groups ILIKE e.muscle_groups
            JOIN 
                recommendations r ON r.exercise_id = e.id
            WHERE 
                uce.user_id = $1
                AND $2 BETWEEN CAST(regexp_replace(split_part(r.height_range, '-', 1), '[^0-9.]', '', 'g') AS FLOAT)
                AND CAST(regexp_replace(split_part(r.height_range, '-', 2), '[^0-9.]', '', 'g') AS FLOAT)
                AND $3 BETWEEN CAST(regexp_replace(split_part(r.weight_range, '-', 1), '[^0-9.]', '', 'g') AS FLOAT)
                AND CAST(regexp_replace(split_part(r.weight_range, '-', 2), '[^0-9.]', '', 'g') AS FLOAT)
                AND $4 BETWEEN CAST(split_part(r.age_range, '-', 1) AS FLOAT)
                AND CAST(split_part(r.age_range, '-', 2) AS FLOAT)
                AND $5 BETWEEN CAST(split_part(r.bmi_range, '-', 1) AS FLOAT)
                AND CAST(split_part(r.bmi_range, '-', 2) AS FLOAT)
                AND e.type ILIKE $6
                AND e.muscle_groups ILIKE $7;
        `;

        const recommendations = await client.query(recommendationQuery, [userID, height, weight, age, bmi, `%${exerciseType}%`, `%${muscleGroup}%`]);

    res.status(200).json({ recommendations: recommendations.rows });
  } catch (error) {
    console.error('Error processing user preference:', error);
    res.status(500).send('Error processing user preference');
  } finally {
    client.release();
  }
});


app.post('/addToExerciseRoutine', async (req, res) => {
  const { userId, recommendationId, days } = req.body;

  // Logic to insert into exercise_routine table
  const query = `
      INSERT INTO exercise_routine (user_id, recommendation_id, day)
      VALUES ($1, $2, $3)
      RETURNING *;
  `;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const day of days) {
      await client.query(query, [userId, recommendationId, day]);
    }
    await client.query('COMMIT');
    res.status(200).json({ success: true, message: "Routine added successfully." });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error adding to exercise routine:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});


app.post('/getExerciseRoutine', async (req, res) => {
  const { userId } = req.body;

  const query = `
      SELECT er.day, e.name AS exercise_name, r.sets_or_duration
      FROM exercise_routine er
      JOIN recommendations r ON er.recommendation_id = r.id
      JOIN exercises e ON r.exercise_id = e.id
      WHERE er.user_id = $1
      ORDER BY er.day;
  `;

  try {
    const { rows } = await pool.query(query, [userId]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching exercise routine:', error);
    res.status(500).send('Error fetching exercise routine');
  }
});





app.post('/donate', async (req, res) => {
  const { name, age, gender, bloodType, lastDonation, contactNumber, email, diseaseHistory } = req.body;

  const { hepatitisB, cancer, HIV, other } = diseaseHistory;

  // Check for disqualifying diseases
  if (hepatitisB || cancer || HIV) {
    return res.status(400).json({ error: 'You cannot donate blood due to your disease history.' });
  }

  try {
    const query = `
      INSERT INTO Blood_donation_candidate (name, age, gender, blood_group, last_donated_blood, phone_number, email)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `;
    const values = [name, age, gender, bloodType, lastDonation, contactNumber, email];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});




app.get('/donors', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM Blood_donation_candidate
      WHERE last_donated_blood < CURRENT_DATE - INTERVAL '3 months'
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/send-email', async (req, res) => {
  const { recipientEmail, donorEmail } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sayjadrahman@gmail.com', // Replace with your fixed admin email
      pass: 'nqvy ctyx jtnl kybj'   // Replace with your admin email password or app password
    }
  });

  const mailOptionsForRecipient = {
    from: 'sayjadrahman@gmail.com', // Use the fixed admin email here
    to: recipientEmail, // The user waiting for blood
    subject: 'Blood Donation Request',
    text: `Hello,\n\nWe need your blood donation urgently. Please contact us if you are available to donate.\n\nThank you!`
  };

  const mailOptionsForDonor = {
    from: 'sayjadrahman@gmail.com',
    to: donorEmail, // The donor's email
    subject: 'Blood Donation Confirmation',
    text: `Hello,\n\nThank you for agreeing to donate blood. We appreciate your willingness to help those in need.\n\nBest regards!`
  };

  try {
    await transporter.sendMail(mailOptionsForRecipient);
    await transporter.sendMail(mailOptionsForDonor);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});




app.post('/signup', async (req, res) => {
  const client = await pool.connect();
  try {
    const { formData } = req.body;
    const registerQuery = `INSERT INTO users (name, age, height, weight, gender, country, state, police_station, blood_group, blood_donor, last_donated_blood, sperm_donor, last_donated_sperm, stats, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,$16)`;

    await client.query('BEGIN');
    await client.query(registerQuery, [
      formData.name,
      formData.age,
      formData.height,
      formData.weight,
      formData.gender,
      formData.country,
      formData.state_district, // Using state_district as specified in formData
      formData.police_station,
      formData.blood_group,
      formData.blood_donor,
      formData.last_donated_blood,
      formData.sperm_donor,
      formData.last_donated_sperm,
      formData.stats,
      formData.email,
      formData.password,
    ]);
    await client.query('COMMIT');
    res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});