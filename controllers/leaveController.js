const leave = require('../model/Leave');
module.exports.add_leave = async (req, res) => {
    const LeaveNew = new leave({
        detail: req.body.detail,
        status: req.body.status,
        dragDate: req.body.dragDate,
        uptoDate: req.body.uptoDate,
        approver: req.body.approver,
        user_id: req.body.user_id,
        ltype_id: req.body.ltype_id,
        image: req.body.image
    });
    try{
        const saveLeave = await LeaveNew.save();
        res.json(saveLeave);
    }catch(err){
        res.json({message:err});
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