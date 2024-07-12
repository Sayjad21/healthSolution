const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); // db.js file
const port = 8000;

app.use(cors());
app.use(express.json());

// Routes will be added later
app.get('/getDoctors', async(req, res) => {
  try {
    const allDoctors = await pool.query('SELECT * FROM doctors');
    res.json(allDoctors.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});