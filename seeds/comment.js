const { Comment } = require('../models');

const commentData = [
const commentData = [
[
    {
      "comment-text": "Gr8t idea!",
      "user_id": 1,
      "post_id": 2
    },
    {
      "comment-text": "This could be an interesting project.",
      "user_id": 1,
      "post_id": 1
    },
    {
      "comment-text": "I agree!",
      "user_id": 3,
      "post_id": 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;