const auth = require('../controllers/authController');
const leave = require('../controllers/leaveController');
const position = require('../model/Position')
const department = require('../model/Department')
const offsite = require('../controllers/offsitecontroller');
const workfromhome = require('../controllers/wfhcontroller');
const role = require('../model/Role');



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
router.get('/position', async (req,res)=>{
    try {
        const data = await position.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/department', async (req,res)=>{
    try {
        const data = await department.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/role', async (req,res)=>{
    try {
        const data = await role.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;