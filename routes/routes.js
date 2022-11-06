const auth = require('../controllers/authController');
const leave = require('../controllers/leaveController');
const regeneral = require('../controllers/regcontroller');
const query = require('../controllers/querycontroller');
const budget = require('../controllers/budgetcontroller');


//router everything
const express = require('express');                                                                                                            
const router = express.Router();
router.post("/user/create", auth.add_user);
router.post("/login", auth.loginUser);
router.get('/user', auth.getUser);
router.post('/user/update/:id', auth.updateUser);
router.delete('/user/delete/:id', auth.deleteUser);
router.get('/logout', auth.logout);
router.get('/leave', leave.getLeave);
router.get('/leave/preson', leave.getStatus);
router.get('/leave/person/accept/:id', leave.getPersonAccept);
router.get('/leave/holiday/:id', leave.getHolidayStatus);

router.get('/leave/sick/:id', leave.getSickStatus);
router.get('/leave/sick/accept/:id', leave.getSickAccept);
router.get('/leave/sick/unaccept/:id', leave.getSickUnaccept);


router.get('/leave/person/:id', leave.getPerson);
router.post('/leave/create', leave.add_leave);
router.post('/leave/update/:id', leave.updateLeave);
router.delete('/leave/delete/:id', leave.deleteLeave);
router.get('/regeneral', regeneral.getGeneral);
router.get('/regeneral/pending', regeneral.getPendingReg);
router.post('/regeneral/create', regeneral.addregeneral);
router.post('/regeneral/update/:id', regeneral.updateReg);
router.delete('/regeneral/delete/:id', regeneral.deleteReg);
router.get('/position', query.getPosition);
router.get('/department', query.getDepartment);
router.get('/role', query.getRole);
router.get('/leavetype', query.getLeaveType);
router.get('/budget', query.getBudget);
router.get('/budget/pending', budget.getPendingBudget);
router.get('/budget/public/:id', budget.getFilterPublic);
router.get('/budget/private/:id', budget.getFilterPrivate);
router.post('/budget/create', budget.addbudget);
router.post('/budget/update/:id', budget.updateBudget);


module.exports = router;