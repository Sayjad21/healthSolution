const express = require('express');
const app = express();
const pool = require('./db'); 

const router = express.Router();

// Add a new medication reminder
router.post('/', async (req, res) => {
    const { medication_name, intake_time, initial_date, final_date, user_id } = req.body;

    try {
        const newReminder = await pool.query(
            `INSERT INTO drugroutine (name, intake_time, initial_date, end_date, user_id)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [medication_name, intake_time, initial_date, final_date, user_id]
        );
        res.json(newReminder.rows[0]);
    } catch (error) {
        console.error('Error adding medication reminder:', error.message);
        res.status(500).json({ error: 'Failed to add medication reminder' });
    }
});

router.get('/', async (req, res) => {
    const userId  = req.query.userId;
    console.log(userId);

    try {
        const reminders = await pool.query(
            `SELECT * FROM drugroutine WHERE user_id = $1`,
            [userId]
        );

        const formattedMedicines = reminders.rows.map(med => {
            const initial_date = new Date(med.initial_date);
            const end_date = new Date(med.end_date);

            const formattedInitialDate = initial_date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-');

            const formattedEndDate = end_date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-');

            return {
                ...med,
                initial_date: formattedInitialDate,
                end_date: formattedEndDate,
            };
        });

        res.json(formattedMedicines);
    } catch (error) {
        console.error('Error fetching medication reminders:', error.message);
        res.status(500).json({ error: 'Failed to fetch medication reminders' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM drugroutine WHERE id = $1", [id]);
        res.json({ message: "Medication deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

app.delete('/deleteExpiredMedications', async (req, res) => {
    const { currentDate, userId } = req.body;

    try {
        await pool.query(
            'DELETE FROM medications WHERE final_date < $1 AND user_id = $2',
            [currentDate, userId]
        );
        res.status(200).send('Expired medications deleted successfully');
    } catch (error) {
        console.error('Error deleting expired medications:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
