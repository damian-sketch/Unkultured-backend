import mongoose from 'mongoose';
// var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

// Model for Users
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{
        type: Schema.Types.ObjectId, 
        ref: 'Posts'
    }]
}, { collection: 'Users' });

const Users = mongoose.model('Users', UserSchema);

export default Users;