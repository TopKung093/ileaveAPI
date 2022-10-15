const mongoose = require('mongoose');
const { Schema } = mongoose;

const wfhdata = new mongoose.Schema({
    detail9: { type: String },
    datail13:{ type:String},
    datail15:{ type:String},
    date: { require: true, type: Date },
    project: { require: true, type: String },
    manager: { require: true, type: Array },
    note: {  type: String },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
    position_id: { require: true, type: Schema.Types.ObjectId, Ref: 'Position' },

}, { collection: 'WorkFromHome', timestamps: true, versionKey: false })
module.exports = mongoose.model('workfromhome', wfhdata)