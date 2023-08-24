const router = require('express').Router();

router.get('/', async (req, res) => {
    // fetch some data here...
    
    // Render a Handlebars view named 'homepage'

    res.render('homepage', { /* data to pass to the view if any */ });
});

//routes for other pages, like /dashboard, /login

module.exports = router;
