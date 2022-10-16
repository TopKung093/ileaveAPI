const auth = require('../controllers/authController');
const leave = require('../controllers/leaveController');
const offsite = require('../controllers/offsitecontroller');
const workfromhome = require('../controllers/wfhcontroller');
const express = require('express');                                                                                                            
const router = express.Router();

router.post("/adduser", auth.add_user);
router.post("/login", auth.loginUser);
router.get('/user', auth.getUser);
router.post('/updateuser/:id', auth.updateUser);
router.delete('/deluser/:id', auth.deleteUser);
router.get('/logout', auth.logout);
router.get('/leave', leave.getLeave);
router.post('/addLeave', leave.addLeave);
router.post('/update/:id', leave.updateLeave);
router.delete('/delete/:id', leave.deleteLeave);
router.get('/offsite', offsite.getOffsite);
router.post('/addoffsite', offsite.addOffsite);
router.post('/updateoffsite/:id', offsite.updateOffsite);
router.delete('/deloffsite/:id', offsite.deleteOffsite);
router.get('/workfromhome', workfromhome.getWFH);
router.post('/addWFH', workfromhome.addWFH);
router.post('/updateWFH/:id', workfromhome.updateWFH);
router.delete('/delWFH/:id', workfromhome.deleteWFH);

module.exports = router;