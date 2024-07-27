const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const pool = require('./db'); // db.js file
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port =  8000;

//secret key for jwt
const secretKey = "RDAS191373321";

app.use(cors());
app.use(express.json());

// Routes (Abhishek)
app.use('/addHospitals', require('./admin'));
app.use('/getHospitals', require('./admin'));
app.use('/deleteHospital', require('./admin'));
app.use('/addThana', require('./admin'));
app.use('/getThana', require('./admin'));
app.use('/deleteThana', require('./admin'));

app.use('/addBlogs', require('./blog'));
app.use('/getBlogs', require('./blog'));

app.use('/getMail', require('./home'));
app.use('/sendMail', require('./home'));

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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData.password, salt);
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
      hashedPassword
    ]);

    const clientQuery = `SELECT * FROM users WHERE email = $1`;
    const user = await client.query(clientQuery, [formData.email]);
    await client.query('COMMIT');
    res.status(200).json({
      message: "Registered successfully",
      user: {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email,
        age: user.rows[0].age,
        height: user.rows[0].height,
        weight: user.rows[0].weight,
        country: user.rows[0].country,
        state_district: user.rows[0].state,
        police_station: user.rows[0].police_station,
        blood_group: user.rows[0].blood_group,
        blood_donor: user.rows[0].blood_donor,
        last_donated_blood: user.rows[0].last_donated_blood,
        sperm_donor: user.rows[0].sperm_donor,
        last_donated_sperm: user.rows[0].last_donated_sperm,
        stats: user.rows[0].stats,
        gender: user.rows[0].gender,
        bmr: user.rows[0].bmr,
        bmi: user.rows[0].bmi,
      },
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }
});


app.post('/login', async (req, res) => {
  const client = await pool.connect();
  try {
    const { formData } = req.body;
    const loginQuery = `SELECT * FROM users WHERE email = $1`;
    const user = await client.query(loginQuery, [formData.email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Register first" });
    }
    const validPassword = await bcrypt.compare(formData.password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const userInfo = {
      id: user.rows[0].id,
      name: user.rows[0].name,
      email: user.rows[0].email
    }
    //create a token for the user,which expires in 300s (5 minutes) and send it to the user
    const token = jwt.sign(userInfo, secretKey, { expiresIn: '300s' });
    res.status(200).json({
      message: "token delivered successfully",

      token: token
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }

});

app.post('/verify', async (req, res) => {
  const client = await pool.connect();
  try {

    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: "Invalid token" });
    }
    jwt.verify(token, secretKey, async (err, authdata) => {
      if (err) {
        return res.status(400).json({ message: "Invalid token" });
      }
      const clientQuery = `SELECT * FROM users WHERE id = $1`;
      const user = await client.query(clientQuery, [authdata.id]);


      res.status(200).json({
        message: "Verification successful & profile accessed",
        user: {
          id: user.rows[0].id,
          name: user.rows[0].name,
          email: user.rows[0].email,
          age: user.rows[0].age,
          height: user.rows[0].height,
          weight: user.rows[0].weight,
          country: user.rows[0].country,
          state_district: user.rows[0].state,
          police_station: user.rows[0].police_station,
          blood_group: user.rows[0].blood_group,
          blood_donor: user.rows[0].blood_donor,
          last_donated_blood: user.rows[0].last_donated_blood,
          sperm_donor: user.rows[0].sperm_donor,
          last_donated_sperm: user.rows[0].last_donated_sperm,
          stats: user.rows[0].stats,
          gender: user.rows[0].gender,
          bmr: user.rows[0].bmr,
          bmi: user.rows[0].bmi,
        },
      })

    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }


});

app.get('/getAllergy_antibiotics_disease', async (req, res) => {
  const client = await pool.connect();
  try {
    const clientQuery = `SELECT * FROM allergy ORDER BY allergy_name`;
    const allergy = await client.query(clientQuery);
    const clientQuery1 = `SELECT * FROM antibiotic ORDER BY name`;
    const antibiotic = await client.query(clientQuery1);
    const clientQuery2 = `SELECT * FROM disease ORDER BY disease_name`;
    const disease = await client.query(clientQuery2);
    res.status(200).json({
      message: "Allergy and Antibiotics fetched successfully",
      allergy: allergy.rows,
      antibiotic: antibiotic.rows,
      disease: disease.rows
    });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }
}
);

// /body: JSON.stringify({
//   user: value.user,
//   allergy: allergyHistory,
//   antibiotics: antibioticHistory
// })
app.post('/updateUser', async (req, res) => {
  const client = await pool.connect();
  try {
    const { user, allergy, antibiotics, disease } = req.body;
    const updateQuery =
      `UPDATE users SET name = $1, age = $2, height = $3, weight = $4, country = $5, state = $6, police_station = $7, 
      blood_group = $8,last_donated_blood = $9, last_donated_sperm = $10 where email = $11`;
    await client.query('BEGIN');
    await client.query(updateQuery, [
      user.name,
      user.age,
      user.height,
      user.weight,
      user.country,
      user.state_district,
      user.police_station,
      user.blood_group,
      user.last_donated_blood,
      user.last_donated_sperm,
      user.email
    ]);

    // Fetch id of user from given email
    const clientQuery = `SELECT * FROM users WHERE email = $1`;
    const user1 = await client.query(clientQuery, [user.email]);
    const userId = user1.rows[0].id;

    // Delete existing allergies for the user
    const deleteUserAllergyQuery = `DELETE FROM user_allergy WHERE user_id = $1`;
    await client.query(deleteUserAllergyQuery, [userId]);

    // Fetch allergy IDs from allergy names
    const fetchAllergyIdsQuery = `SELECT id FROM allergy WHERE allergy_name = ANY($1::text[])`;
    const allergyIdsResult = await client.query(fetchAllergyIdsQuery, [allergy]);
    const allergyIds = allergyIdsResult.rows.map(row => row.id);

    // Insert new allergies for the user
    const insertUserAllergyQuery = `INSERT INTO user_allergy (user_id, allergy_id) VALUES ($1, $2)`;
    for (const allergyId of allergyIds) {
      await client.query(insertUserAllergyQuery, [userId, allergyId]);
    }


    //delete existing antibiotics for the user
    const deleteUserAntibioticQuery = `DELETE FROM user_antibiotic_resistance WHERE user_id = $1`;
    await client.query(deleteUserAntibioticQuery, [userId]);

    // Fetch antibiotic IDs from antibiotic names
    const fetchAntibioticIdsQuery = `SELECT id FROM antibiotic WHERE name = ANY($1::text[])`;
    const antibioticIdsResult = await client.query(fetchAntibioticIdsQuery, [antibiotics]);
    const antibioticIds = antibioticIdsResult.rows.map(row => row.id);

    // Insert new antibiotics for the user
    const insertUserAntibioticQuery = `INSERT INTO user_antibiotic_resistance (user_id, antibiotic_id) VALUES ($1, $2)`;
    for (const antibioticId of antibioticIds) {
      await client.query(insertUserAntibioticQuery, [userId, antibioticId]);
    }

    //delete existing diseases for the user
    const deleteUserDiseaseQuery = `DELETE FROM DISEASE_HISTORY WHERE user_id = $1`;
    await client.query(deleteUserDiseaseQuery, [userId]);

    // Fetch disease IDs from disease names
    const fetchDiseaseIdsQuery = `SELECT disease_id FROM disease WHERE disease_name = ANY($1::text[])`;
    const diseaseIdsResult = await client.query(fetchDiseaseIdsQuery, [disease]);
    const diseaseIds = diseaseIdsResult.rows.map(row => row.disease_id);
    console.log(disease);
    console.log(diseaseIds);

    // Insert new diseases for the user
    const insertUserDiseaseQuery = `INSERT INTO DISEASE_HISTORY (user_id, disease_id) VALUES ($1, $2)`;
    for (const diseaseId of diseaseIds) {
      await client.query(insertUserDiseaseQuery, [userId, diseaseId]);
    }

    // Commit the transaction
    await client.query('COMMIT');
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});

app.post('/getPatientAntibioticAndAllergyHistory', async (req, res) => {
  const client = await pool.connect();
  try {
    const { email } = req.body;

    // Fetch user id from email
    const clientQuery = `SELECT id FROM users WHERE email = $1`;
    const userResult = await client.query(clientQuery, [email]);
    const userId = userResult.rows[0].id;

    // Query to fetch user allergies
    const userAllergyQuery = `
          SELECT allergy.allergy_name 
          FROM user_allergy 
          JOIN allergy ON user_allergy.allergy_id = allergy.id 
          WHERE user_id = $1`;
    const userAllergyResult = await client.query(userAllergyQuery, [userId]);
    const userAllergies = userAllergyResult.rows.map(row => row.allergy_name);

    // Query to fetch user antibiotics
    const userAntibioticQuery = `
          SELECT antibiotic.name 
          FROM user_antibiotic_resistance 
          JOIN antibiotic ON user_antibiotic_resistance.antibiotic_id = antibiotic.id 
          WHERE user_id = $1`;
    const userAntibioticResult = await client.query(userAntibioticQuery, [userId]);
    const userAntibiotics = userAntibioticResult.rows.map(row => row.name);

    res.status(200).json({
      message: 'Antibiotic and Allergy history fetched successfully',
      allergy: userAllergies,
      antibiotic: userAntibiotics
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});


app.post('/doctorHospital', async (req, res) => {
  const client = await pool.connect();
  try {
    const { search, doctorSpeciality, treatmentType, degree, policestation } = req.body;

    // Step 1: Separate the words of the search string
    const words = search.split(' ');

    // Step 2: Add a percentage symbol before and after each letter in every word
    const modifiedWords = words.map(word =>
      word.split('').map(letter => `%${letter}%`).join('')
    );

    // Convert modifiedWords array to a string for SQL query
    const modifiedSearchString = modifiedWords.join(' ');

    // Base query parts
    let doctorQueryBase = `
      SELECT DISTINCT doctors.doctor_name, doctors.degree, doctors.doctor_speciality, doctors.treatment_type, doctors.contact_info, hospital.name AS hospital_name, hospital.street, hospital.city, hospital.policestation, hospital.contact_number, hospital.email
      FROM doctors 
      LEFT JOIN hospital ON doctors.hospital_id = hospital.id
      WHERE 1=1
    `;

    let hospitalQueryBase = `
      SELECT * FROM hospital
      WHERE 1=1
    `;

    // Build query conditions
    let doctorConditions = '';
    let hospitalConditions = '';

    if (search !== '') {
      doctorConditions += ` AND (doctors.doctor_name ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}]) 
                          OR doctors.doctor_speciality ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}]))`;

      hospitalConditions += ` AND name ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}])`;
    }

    if (doctorSpeciality !== '') {
      doctorConditions += ` AND doctors.doctor_speciality ILIKE '%${doctorSpeciality}%'`;
    }

    if (treatmentType !== '') {
      doctorConditions += ` AND doctors.treatment_type = '${treatmentType}'`;
    }

    if (degree !== '') {
      doctorConditions += ` AND doctors.degree ILIKE '%${degree}%'`;
    }

    if (policestation !== '') {
      doctorConditions += ` AND hospital.policestation ILIKE '%${policestation}%'`;
      hospitalConditions += ` AND policestation ILIKE '%${policestation}%'`;
    }

    // Combine base query with conditions
    const doctorQuery = doctorQueryBase + doctorConditions;
    const hospitalQuery = hospitalQueryBase + hospitalConditions;

    // Execute queries
    const doctorsResult = await client.query(doctorQuery);
    const hospitalsResult = await client.query(hospitalQuery);

    // Combine the results
    const results = {
      doctors: doctorsResult.rows,
      hospitals: hospitalsResult.rows
    };

    res.status(200).json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release();
  }
});


app.get('/getDoctors', async (req, res) => {
  const client = await pool.connect();
  try {
    const allDoctors = await pool.query('SELECT * FROM doctors INNER JOIN hospital ON doctors.hospital_id = hospital.id ORDER BY doctor_name');
    res.status(200).json({
      message: "Doctors fetched successfully",
      doctors: allDoctors.rows
    }
    );

  } catch (err) {
    console.error(err.message);
  }
}
);

app.post('/addDoctors', async (req, res) => {
  const client = await pool.connect();
  try {
    const { doctorName, degree, doctorSpeciality, hospital, treatmentType, contactInfo } = req.body;
    const clientQuery = `SELECT id FROM hospital WHERE name = $1`;
    const hospitalResult = await client.query(clientQuery, [hospital]);
    const hospitalId = hospitalResult.rows[0].id;
    const insertQuery = `INSERT INTO doctors (doctor_name, degree, doctor_speciality, hospital_id, treatment_type, contact_info) VALUES ($1, $2, $3, $4, $5, $6)`;
    await client.query(insertQuery, [doctorName, degree, doctorSpeciality, hospitalId, treatmentType, contactInfo]);
    res.status(200).json({ message: 'Doctor added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
}
);






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});