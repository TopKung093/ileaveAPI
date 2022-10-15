const mongoose = require('mongoose');
const { Schema } = mongoose;

const leavedata = new mongoose.Schema({
    detail: { require: true, type: String },
    status: { require: true, type: String },
    dragDate: { require: true, type: Date },
    uptoDate: { require: true, type: Date },
    donkeyS: { require: true, type: String },
    ChiefS: { require: true, type: String },
    approver: { require: true, type: String },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
    ltype_id: { require: true, type: Schema.Types.ObjectId, Ref: 'LeaveType' },
}, { collection: 'Leave', timestamps: true, versionKey: false })
module.exports = mongoose.model('leave', leavedata)