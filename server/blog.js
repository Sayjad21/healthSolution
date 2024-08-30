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

        const formattedBlogs = allBlogs.rows.map(blog => {
            const date = new Date(blog.created_at);
            const formattedDate = date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
            return {
                ...blog,
                created_at: formattedDate,
            };
        });

        res.json(formattedBlogs);
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
    }
});

router.get('/getBlogger', async (req, res) => {
    try {
        const blogId = req.query.blogId;
        // console.log(blogId);

        const blogger = await pool.query('SELECT name FROM USERS WHERE id = (select user_id from blog where id = $1)', [parseInt(blogId)]);
        res.json(blogger.rows[0]);
    } catch (error) {
        console.error('Error fetching blogger:', error.message);
    }

});

router.get('/blogLikes', async (req, res) => {
    try {
        const blogId = req.query.blogId;
        const userId = req.query.userId;

        const likesCount = await pool.query('SELECT COUNT(*) FROM blog_reactions WHERE blog_id = $1', [blogId]);
        console.log(likesCount.rows[0].count);

        const likes = await pool.query('SELECT * FROM blog_reactions WHERE blog_id = $1 AND user_id = $2', [blogId, userId]);
        console.log(likes.rows.length);

        res.json({
            userHasLiked: likes.rows.length > 0,
            likesCount: likesCount.rows[0].count,
        });

    } catch (error) {
        console.error('Error fetching likes:', error.message);
    }
});

router.put('/toggleLike', async (req, res) => {
    try {
        const { blogId, userId } = req.body;

        // Check if the user already liked the blog
        const existingLike = await pool.query(
            'SELECT * FROM blog_reactions WHERE blog_id = $1 AND user_id = $2',
            [blogId, userId]
        );

        if (existingLike.rows.length > 0) {
            await pool.query(
                'DELETE FROM blog_reactions WHERE blog_id = $1 AND user_id = $2',
                [blogId, userId]
            );
        } else {
            await pool.query(
                'INSERT INTO blog_reactions (user_id, blog_id, like_status) VALUES ($1, $2, true)',
                [userId, blogId]
            );
        }

        res.json({ message: 'Like status toggled' });
    } catch (error) {
        console.error('Error toggling like:', error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/topBlogs', async (req, res) => {
    try {
        const topBlogs = await pool.query(`select b.id, b.title, count(*) as like_count, (select name from users u where u.id = b.user_id) as user_name, b.description
                                            from blog b join blog_reactions br on b.id = br.blog_id
                                            group by br.blog_id, b.id
                                            order by like_count desc, b.id asc
                                            LIMIT 4`);
        res.json(topBlogs.rows);
    } catch (error) {
        console.error('Error fetching top blogs:', error.message);
    }
});

module.exports = router;