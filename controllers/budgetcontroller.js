const budget = require('../model/Budget');

module.exports.addbudget = async (req, res) => {
    const budgetNew = new budget({
        travelby: req?.body?.travelby,
        place: req?.body?.place,
        detail: req?.body?.detail,
        forward: req?.body?.forward,
        approver: req?.body?.approver,
        backward: req?.body?.backward,
        cash: req?.body?.cash,
        tdetail: req?.body?.tdetail,
        cashpb: req?.body?.cashpb,
        status: req?.body?.status,
        user_id: req?.body?.user_id,
    })
    try {
        const databudgetSave = await budgetNew.save();
        res.status(200).json(databudgetSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports.updateBudget = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await budget.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.deleteBudget = async (req, res) => {
    console.log(req.params)
    let data = await budget.deleteOne(req.params);
    res.send(data);
}
module.exports.getFilterPublic = async (req, res) => {
    try {
        const filter = {
            user_id: req.params.id,
            travelby: "เดินทางโดยรถสาธารณะ",
        }
        const result = await budget.find(filter);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getFilterPrivate = async (req, res) => {
    try {
        const filter = {
            user_id: req.params.id,
            travelby: "เดินทางโดยรถส่วนตัว",
        }
        const result = await budget.find(filter);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.getPendingBudget = async (req, res) => {
    const filter = {
        status: "รออนุมัติ",
    }
    try {
        const user = await budget.find(filter);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}