import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Model for Posts/Articles
const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true},
    sub_category: { type: String, required: false},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
}, { collection: 'Posts' });

const Posts = mongoose.model('Posts', PostSchema);

export default Posts;