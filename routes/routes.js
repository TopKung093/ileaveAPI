const authController = require('../controllers/authController');
const leaveController = require('../controllers/leaveController');
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.post("/adduser", authController.add_user);
router.post("/login", authController.loginUser);
router.get('/user', authController.getUser);
router.get('/logout', authController.logout);
router.get('/leave', leaveController.getLeave);
router.post('/addLeave', leaveController.addLeave);
router.post('/update/:id', leaveController.updateLeave);
router.delete('/delete/:id', leaveController.deleteLeave);

module.exports = router;