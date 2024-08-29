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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
      await pool.query('DELETE FROM hospital WHERE id = $1', [id]);
      res.status(200).json({ message: 'hospital data deleted successfully' });
  } catch (error) {
      console.error('Error deleting hospital data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/addThana', async (req, res) => {
  const { thana_name_from, nearest_thanas } = req.body;

  try {
      for (const thana_name_to of nearest_thanas) {
          await pool.query(
              'INSERT INTO thana_nearest (thana_name_from, thana_name_to) VALUES ($1, $2) ON CONFLICT DO NOTHING',
              [thana_name_from, thana_name_to]
          );
      }
      res.status(201).json({ message: "Thana nearest data added successfully" });
  } catch (error) {
      console.error('Error adding thana nearest data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getThana', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM thana_nearest');
      res.json(result.rows);
  } catch (error) {
      console.error('Error fetching thana nearest data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/deleteThana/:id', async (req, res) => {
  const { id } = req.params;

  try {
      await pool.query('DELETE FROM thana_nearest WHERE id = $1', [id]);
      res.status(200).json({ message: 'Thana nearest data deleted successfully' });
  } catch (error) {
      console.error('Error deleting thana nearest data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;