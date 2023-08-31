const faker = require('faker');
const { BlogPost } = require('../models'); // Adjust the path accordingly

const seedPosts = async () => {
    const postsData = [];

    for (let i = 0; i < 10; i++) {
        const newPost = {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            // Assuming you have a user_id column to associate the post with a user
            user_id: Math.floor(Math.random() * 10) + 1  // This generates a random user ID between 1 and 10. Adjust the range if you have a different number of users.
        };
        postsData.push(newPost);
    }

    await BlogPost.bulkCreate(postsData);
}


module.exports = seedPosts;
