const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    group: {
        type: String,
    },
    username: {
        type: String,
    },
    postingtime: {
        type: Date,
        default: Date.now,
        get(value) {
            const offset = 8; // UTC +8
            const utc = value.getTime() + (value.getTimezoneOffset() * 60000); // 转为 UTC 时间
            const date = new Date(utc + (3600000 * offset)); // 根据偏移量调整时间
            return date.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
        },
        immutable: true,
    },
    postAnonymous: {
        type: String,
    },
    pictures: {
        type: Number,
    },
    pictureUrl: [{
        filename: String,
        originalname: String,
        path: String,
        size: Number,
    }],
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
module.exports = Post;