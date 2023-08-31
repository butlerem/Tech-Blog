const sequelize = require('../config/connection');
const seedPosts = require('./seedPosts');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced!');

    await seedPosts();
    console.log('Posts seeded!');

    process.exit(0);
};

seedDatabase();

