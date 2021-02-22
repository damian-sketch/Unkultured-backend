import Posts from '../models/Posts.js'




// Get all posts under 'Covers category'
const covers = { "category": "covers" };
async function coverPosts(req, res) {
   const posts = await Posts.find(covers);
   console.log(posts);
   res.send(posts);  
}


// Get all posts under 'style category'
const style = { "category": "style" };
async function stylePosts(req, res) {
    const posts = await Posts.find(style);
    console.log(posts);
    res.send(posts);  
 }


export { coverPosts, stylePosts };