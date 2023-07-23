import express from 'express';
let router = express.Router()

// GET     /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
   
    res.send('post created');
})
// GET     /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
   
    res.send('post created');
})
// PUT     /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    
    res.send('post created');
})
// DELETE  /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    
    res.send('post created');
})

export default router