const express = require('express');
const app = express();
const PORT = 3000;

// Store posts in memory (will reset when server restarts)
let posts = [];

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Home page - displays all posts
app.get('/', (req, res) => {
  res.render('index', { posts: posts });
});

// New post page
app.get('/new-post', (req, res) => {
  res.render('new-post');
});

// Create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const post = {
    id: Date.now(),
    title,
    content,
    date: new Date().toLocaleDateString()
  };
  posts.unshift(post); // Add to beginning of array
  res.redirect('/');
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(post => post.id !== parseInt(req.params.id));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});