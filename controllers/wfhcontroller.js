const workfromhome = require('../model/WorkFromHome');
module.exports.addWFH = async (req, res) => {
    const wfhNew = new workfromhome({
        datail: req.body.detail,
        date: req.body.date,
        project: req.body.project,
        manager: req.body.manager,
        user_id: req.body.user_id
    })
    try {
        const datawfhToSave = await wfhNew.save();
        res.status(200).json(datawfhToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.getWFH = async (req, res) => {
    try {
        const data = await workfromhome.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.updateWFH = async (req, res) => {
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
module.exports.deleteWFH = async (req, res) => {
    console.log(req.params)
    let data = await leave.deleteOne(req.params);
    res.send(data);
}