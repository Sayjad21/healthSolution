const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); // db.js file
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port = 5000;

//secret key for jwt
const secretKey = "RDAS191373321";

app.use(cors());
app.use(express.json());

// Routes (Abhishek)
app.use('/addHospitals', require('./admin'));
app.use('/getHospitals', require('./admin'));

// Routes will be added later
// app.get('/getDoctors', async (req, res) => {
//   try {
//     const allDoctors = await pool.query('SELECT * FROM doctors');
//     res.json(allDoctors.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

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
      const { user, allergy, antibiotics,disease } = req.body;
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
    const { search } = req.body;
    // console.log(search);
    // Step 1: Separate the words of the search string
    const words = search.split(' ');

    // Step 2: Add a percentage symbol before and after each letter in every word
    const modifiedWords = words.map(word =>
      word.split('').map(letter => `%${letter}%`).join('')
    );

    // Convert modifiedWords array to a string for SQL query
    const modifiedSearchString = modifiedWords.join(' ');

    // Step 4: Filter the doctors table
    const doctorQuery = `
  SELECT DISTINCT doctors.doctor_name, doctors.degree, doctors.doctor_speciality, doctors.treatment_type, doctors.contact_info, hospital.name AS hospital_name, hospital.street, hospital.city, hospital.policestation, hospital.contact_number, hospital.email
  FROM doctors 
  LEFT JOIN hospital ON doctors.hospital_id = hospital.id
  WHERE doctors.doctor_name ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}])
  OR doctors.doctor_speciality ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}]);
`;

// Filter the hospital table
const hospitalQuery = `
  SELECT * FROM hospital
  WHERE name ILIKE ANY (ARRAY[${modifiedWords.map(word => `'${word}'`).join(',')}]);
`;


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

    



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});