const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/users
router.get('/', userController.getAllUsers);

// POST /api/users
router.post('/', userController.createUser);

// GET /api/users/:id
router.get('/:id', userController.getUserById);

// PUT /api/users/:id
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id
router.delete('/:id', userController.deleteUser);

// GET /api/users/:id/videos
router.get('/:id/videos', userController.getUserVideos);

// GET /api/users/:id/followers
router.get('/:id/followers', userController.getUserFollowers);

// POST /api/users/:id/followers
router.post('/:id/followers', userController.followUser);

// DELETE /api/users/:id/followers
router.delete('/:id/followers', userController.unfollowUser);

module.exports = router;