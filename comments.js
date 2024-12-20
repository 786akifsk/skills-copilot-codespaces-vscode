// Create web server 
// 1. Create express server 
// 2. Create a route for comments
// 3. Create a route for comments/:commentId
// 4. Create a route for comments/:commentId/replies
// 5. Create a route for comments/:commentId/replies/:replyId
// 6. Create a route for comments/:commentId/replies/:replyId/replies
// 7. Create a route for comments/:commentId/replies/:replyId/replies/:replyId

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments');
});

app.get('/comments/:commentId', (req, res) => {
    res.send(`Comment ${req.params.commentId}`);
});

app.get('/comments/:commentId/replies', (req, res) => {
    res.send(`Replies for comment ${req.params.commentId}`);
});

app.get('/comments/:commentId/replies/:replyId', (req, res) => {
    res.send(`Reply ${req.params.replyId} for comment ${req.params.commentId}`);
});

app.get('/comments/:commentId/replies/:replyId/replies', (req, res) => {
    res.send(`Replies for reply ${req.params.replyId} for comment ${req.params.commentId}`);
});

app.get('/comments/:commentId/replies/:replyId/replies/:replyId', (req, res