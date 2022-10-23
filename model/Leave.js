const mongoose = require('mongoose');
const { Schema } = mongoose;
const leaveSchema = new mongoose.Schema({
    detail: { require: true, type: String },
    status: { require: true,type: String },
    dragDate: { require: true, type: Date },
    uptoDate: { require: true, type: Date},
    number: { require: true,type: Number},
    approver: { require: true, type: String },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
    ltype_id: { require: true, type: Schema.Types.ObjectId, Ref: 'LeaveType' },
}, {
    collection: 'Leave',
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('Leave', leaveSchema)