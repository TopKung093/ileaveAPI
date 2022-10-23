const regeneral = require('../model/Regeneral');
module.exports.addregeneral = async (req, res) => {
    const regNew = new regeneral({
        datail: req?.data?.detail,
        date: req?.data?.date,
        approver: req?.data?.approver,
        cite: req?.data?.cite,
        user_id: req?.data?.user_id
    })
    try {
        const dataregToSave = await regNew.save();
        res.status(200).json(dataregToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.getGeneral = async (req, res) => {
    try {
        const data = await regeneral.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.updateReg = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await regeneral.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.deleteReg = async (req, res) => {
    console.log(req.params)
    let data = await regeneral.deleteOne(req.params);
    res.send(data);
}