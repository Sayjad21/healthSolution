const express = require('express');
const app = express();
const pool = require('./db');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, street, city, policestation, contact_number, email } = req.body;

    try {
      await pool.query(
        `INSERT INTO hospital (name, street, city, policestation, contact_number, email)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, street, city, policestation, contact_number, email]
      );
  
    //   const allHospitals = await pool.query('SELECT * FROM hospital');  
    //   res.status(201).json(allHospitals.rows);

    res.status(201).json({ message: "Hospital added successfully" });
    
    } catch (error) {
      console.error('Error adding hospital:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
      const allHospitals = await pool.query('SELECT * FROM hospital');
      res.json(allHospitals.rows);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;