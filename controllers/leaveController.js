const { db } = require('../model/Leave');
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
        number: req.body.number
    });
    try {
        const saveLeave = await LeaveNew.save();
        res.json(saveLeave);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports.getLeave = async (req, res) => {
    db.collection('Leave').aggregate(
        [
            {
                $project: {
                    _id: 1,
                    detail: 1,
                    status: 1,
                    dragDate: { $dateToString: { format: "%d/%m/%Y", date: "$dragDate" } },
                    uptoDate: { $dateToString: { format: "%d/%m/%Y", date: "$uptoDate" } },
                    number: 1,
                    approver: 1,
                    user_id: 1,
                    ltype_id: 1,
                    createdAt: { $dateToString: { format: "%d/%m/%Y", date: "$createdAt" } },
                }
            }
        ]
    ).toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    })
    // try {
    //     const data = await leave.find();
    //     res.json(data);
    // }
    // catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
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