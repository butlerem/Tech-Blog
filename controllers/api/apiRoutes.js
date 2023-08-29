const router = require('express').Router();
const { User } = require('../../models'); // Import your models as needed.

// A GET route to get all users example

router.get('/users', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Other routes for creating, updating, and deleting data here

module.exports = router;
