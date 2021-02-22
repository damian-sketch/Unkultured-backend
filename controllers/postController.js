import Posts from '../models/Posts.js'


// Get all posts
async function allPosts(req, res) {
   const posts = await Posts.find({});
   console.log(posts);
   res.send(posts);  
};


// Get all posts under 'Covers category'
const covers = { "category": "covers" };
async function coverPosts(req, res) {
   const posts = await Posts.find(covers);
   console.log(posts);
   res.send(posts);  
};


// Get all posts under 'Style category'
const style = { "category": "style" };
async function stylePosts(req, res) {
    const posts = await Posts.find(style);
    console.log(posts);
    res.send(posts);  
 };

 // Get all posts under 'Culture category'
const culture = { "category": "culture" };
async function culturePosts(req, res) {
    const posts = await Posts.find(culture);
    console.log(posts);
    res.send(posts);  
 };

 // Get all posts under 'Music category'
 const music = { "category": "music" };
 async function musicPosts(req, res) {
     const posts = await Posts.find(music);
     console.log(posts);
     res.send(posts);  
  };

   // Get all posts under 'Unkultured TV category'
 const videos = { "category": "videos" };
 async function videoPosts(req, res) {
     const posts = await Posts.find(videos);
     console.log(posts);
     res.send(posts);  
  };

  // Create a post
async function createPost(req, res) {
   console.log(req);
   try {
       if (!req.body.title && !req.body.content && !req.body.category) {
         console.log('There is an error')  
         return res.status(403).end();
           
       }

       const newPost = new Posts(req.body);
       const post = await newPost.save();
       res.status(201).json(post);
       
   }
   catch (err) {
   console.log(err);
   }
}

export { coverPosts, stylePosts, allPosts, culturePosts, musicPosts, videoPosts, createPost }