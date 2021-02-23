import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Model for Posts/Articles
const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
}, { collection: 'Posts' });

const Posts = mongoose.model('Posts', PostSchema);

export default Posts;