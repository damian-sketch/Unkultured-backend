import Posts from '../models/Posts.js'


// Get all posts
async function allPosts(req, res) {
   const posts = await Posts.find({});
   console.log(posts);
   res.send(posts);  
}


export default allPosts;