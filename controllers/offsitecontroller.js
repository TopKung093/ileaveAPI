const offsite = require('../model/Offsite');
module.exports.addOffsite = async (req, res) => {
    const offsite = new offsite({
        location: req.body.location,
        detail: req.body.detail,
        date: req.body.date,
        time: req.body.time,
        to_distance: req.body.to_distance,
        return_distance: req.body.return_distance,
        budget: req.body.budget,
        status: req.body.status,
        user_id: req.body.user_id,
    })
    try {
        const dataoffsiteToSave = await offsite.save();
        res.status(200).json(dataoffsiteToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.getOffsite = async (req, res) => {
    try {
        const data = await offsite.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.updateOffsite = async (req, res) => {
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
module.exports.deleteOffsite = async (req, res) => {
    console.log(req.params)
    let data = await leave.deleteOne(req.params);
    res.send(data);
}