const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            include: [User],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', { 
            blogs, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ... Add other routes for viewing individual posts, user dashboard, etc. ...

module.exports = router;
