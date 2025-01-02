const express = require('express');
const AdminController = require('./AdminController');

const router = express.Router();

// Define routes for admin operations
router.post('/login', AdminController.login);
router.post('/register', AdminController.register);
router.get('/profile', AdminController.getProfile);
router.put('/profile', AdminController.updateProfile);
router.delete('/profile', AdminController.deleteProfile);

module.exports = router;