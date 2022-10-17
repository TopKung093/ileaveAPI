const auth = require('../controllers/authController');
const leave = require('../controllers/leaveController');
const offsite = require('../controllers/offsitecontroller');
const workfromhome = require('../controllers/wfhcontroller');
const express = require('express');                                                                                                            
const router = express.Router();

router.post("/user/add", auth.add_user);
router.post("/login", auth.loginUser);
router.get('/user', auth.getUser);
router.post('/user/update/:id', auth.updateUser);
router.delete('/user/delete/:id', auth.deleteUser);
router.get('/logout', auth.logout);
router.get('/leave', leave.getLeave);
router.post('/leave/add', leave.add_leave);
router.post('/leave/update/:id', leave.updateLeave);
router.delete('/leave/delete/:id', leave.deleteLeave);
router.get('/offsite', offsite.getOffsite);
router.post('/offsite/add', offsite.addOffsite);
router.post('/offsite/update/:id', offsite.updateOffsite);
router.delete('/offsite/delete/:id', offsite.deleteOffsite);
router.get('/wfh', workfromhome.getWFH);
router.post('/wfh/add', workfromhome.addWFH);
router.post('/wfh/update/:id', workfromhome.updateWFH);
router.delete('/wfh/delete/:id', workfromhome.deleteWFH);

module.exports = router;