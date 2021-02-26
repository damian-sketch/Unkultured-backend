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


 // Get all Featured posts under style
 const style_featured = { "sub_category": "style_featured" };
 async function Featuredstyle(req, res) {
     const posts = await Posts.find(style_featured);
     console.log(posts);
     res.send(posts);  
  };

 // Get all posts under sneakerheads
 const sneakerheads = { "sub_category": "sneakerheads" };
 async function Sneakerheads(req, res) {
     const posts = await Posts.find(sneakerheads);
     console.log(posts);
     res.send(posts);  
  };
  
 // Get all Featured posts under music
 const music_featured = { "sub_category": "music_featured" };
 async function Featuredmusic(req, res) {
     const posts = await Posts.find(music_featured);
     console.log(posts);
     res.send(posts);  
  };
  
 // Get all lyric posts under Music
 const lyrics = { "sub_category": "lyrics" };
 async function Lyrics(req, res) {
     const posts = await Posts.find(lyrics);
     console.log(posts);
     res.send(posts);  
  };
  
  // Get all New music releases
  const new_release = { "sub_category": "new_release" };
  async function Newreleases(req, res) {
      const posts = await Posts.find(new_release);
      console.log(posts);
      res.send(posts);  
   };
   
 // Get all Featured posts under culture
 const culture_featured = { "sub_category": "culture_featured" };
 async function Featuredculture(req, res) {
     const posts = await Posts.find(culture_featured);
     console.log(posts);
     res.send(posts);  
  };
  
 // Get all Popnews posts
 const pop = { "sub_category": "pop" };
 async function Popnews(req, res) {
     const posts = await Posts.find(pop);
     console.log(posts);
     res.send(posts);  
  };  

  // Create a post
async function createPost(req, res) {
   console.log(req);
   try {
       if (!req.body.title && !req.body.content && !req.body.category) {  
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

export { coverPosts, stylePosts, allPosts, culturePosts, musicPosts, videoPosts, createPost, Featuredstyle, Sneakerheads, Featuredmusic, Lyrics, Newreleases, Featuredculture, Popnews }