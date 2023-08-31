const seedPosts = require('./seedPosts');
const sequelize = require('../config/connection'); 
const seedAll = async () => {
    await sequelize.sync({ force: true }); // This will reset the database

    await seedUsers();
    console.log('Users seeded');

    await seedPosts();
    console.log('Posts seeded');

    process.exit(0);
};


seedDatabase();
