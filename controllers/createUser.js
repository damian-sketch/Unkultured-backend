import Users from '../models/Users.js';



// Create a user
async function createUser(req, res) {
    console.log(req);
    try {
        if (!req.body.firstName && !req.body.email) {
            return res.status(403).end();
        }

        const newUser = new Users(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
        
    }
    catch (err) {
    console.log(err);
    }
}



export default createUser;