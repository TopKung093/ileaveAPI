const mongoose = require('mongoose');
const { Schema } = mongoose;

const wfhdata = new mongoose.Schema({
    datail: { require: true,type: String },
    date: { require: true, type: Date },
    project: { require: true, type: String },
    manager: { require: true, type: Array },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
}, {
    collection: 'WorkFromHome',
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('workfromhome', wfhdata)