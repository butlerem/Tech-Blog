const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// User to BlogPost: one-to-many
User.hasMany(BlogPost, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'userId'
});

// BlogPost to Comment: one-to-many
BlogPost.hasMany(Comment, {
    foreignKey: 'blogPostId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPostId'
});

// User to Comment: one-to-many
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = {
    User,
    BlogPost,
    Comment
};
