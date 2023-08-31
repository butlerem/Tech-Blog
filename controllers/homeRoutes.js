const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// Home route
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

// Login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});

// ... Add other routes for viewing individual posts, user dashboard, etc. ...

module.exports = router;
