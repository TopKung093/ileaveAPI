const leave = require('../model/Leave');
module.exports.addLeave = async (req, res) => {
    const leave = new leave({
        status: req.body.status,
        sdate: req.body.sdate,
        edate: req.body.edate,
        user_id: req.body.user_id,
        ltype_id: req.body.ltype_id,
    })
    try {
        const dataleaveToSave = await leave.save();
        res.status(200).json(dataleaveToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.getLeave = async (req, res) => {
    try {
        const data = await leave.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.updateLeave = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await leave.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.deleteLeave = async (req, res) => {
    console.log(req.params)
    let data = await leave.deleteOne(req.params);
    res.send(data);
}