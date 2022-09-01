const { Post } = require('../models');

const postData = [
    {
        "title": "App Idea",
        "content": "What if we created an app to rate everyone at the bar (and eventually the world at large) on a scale of one to five stars?",
        "user_id": 3
    },
    {
        "title": "New Computer",
        "content": "I think we should get a new computer for the business.",
        "user_id": 4
    },
    {
        "title": "Website",
        "content": "We need to hire a developer to make us great websites for all our business ideas. We're missing out a key demographic if we can't market ourselves appropriately.",
        "user_id": 2

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;