const express = require('express');
const app = express();
const pool = require('./db');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, description, user_id } = req.body;
        const newBlog = await pool.query(
            'INSERT INTO blog (title, description, user_id) VALUES($1, $2, $3) RETURNING *',
            [title, description, user_id]
        );
        res.json(newBlog.rows[0]);
    } catch (error) {
        console.error('Error creating blog:', error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const allBlogs = await pool.query('SELECT * FROM blog');
        res.json(allBlogs.rows);
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
    }
});


module.exports = router;