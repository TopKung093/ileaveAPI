const position = require('../model/Position');
const leavetype = require('../model/LeaveType');
const department = require('../model/Department');
const role = require('../model/Role');
const budget = require('../model/Budget');

module.exports.getPosition = async (req, res) => {
    try {
        const data = await position.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getDepartment = async (req, res) => {
    try {
        const data = await department.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getRole = async (req, res) => {
    try {
        const data = await role.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getLeaveType = async (req, res) => {
    try {
        const data = await leavetype.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getBudget = async (req, res) => {
    try {
        const data = await budget.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}











