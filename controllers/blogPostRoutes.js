const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            ...req.body,
            userId: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ... Add routes for updating and deleting posts ...

module.exports = router;
