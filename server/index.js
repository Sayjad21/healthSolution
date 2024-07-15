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


app.post('/login', async (req, res) => {
  const client = await pool.connect();
  try {
    const { formData } = req.body;
    const loginQuery = `SELECT * FROM users WHERE email = $1`;
    const user = await client.query(loginQuery, [formData.email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const validPassword = await bcrypt.compare(formData.password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const userInfo={
      id:user.rows[0].id,
      name:user.rows[0].name,
      email:user.rows[0].email
    }
    //create a token for the user,which expires in 300s (5 minutes) and send it to the user
    const token = jwt.sign(userInfo, secretKey, { expiresIn: '300s' });
    res.status(200).json({ 
      message: "token delivered successfully",
      // user: {
      //   name: user.rows[0].name,
      //   email: user.rows[0].email,
      //   age: user.rows[0].age,
      //   height: user.rows[0].height,
      //   weight: user.rows[0].weight,
      //   country: user.rows[0].country,
      //   state_district: user.rows[0].state,
      //   police_station: user.rows[0].police_station,
      //   blood_group: user.rows[0].blood_group,
      //   blood_donor: user.rows[0].blood_donor,
      //   last_donated_blood: user.rows[0].last_donated_blood,
      //   sperm_donor: user.rows[0].sperm_donor,
      //   last_donated_sperm: user.rows[0].last_donated_sperm,
      //   stats: user.rows[0].stats,
      //   gender: user.rows[0].gender,
      //   bmr: user.rows[0].bmr,
      //   bmi: user.rows[0].bmi,
      // },
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
});



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });