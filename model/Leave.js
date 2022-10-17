const mongoose = require('mongoose');
const { Schema } = mongoose;
const leaveSchema = new mongoose.Schema({
    detail: { require: true, type: String },
    status: { require: true,type: String },
    dragDate: { require: true, type: Date },
    uptoDate: { require: true, type: Date },
    approver: { require: true, type: String },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
    ltype_id: { require: true, type: Schema.Types.ObjectId, Ref: 'LeaveType' },
    image: {type: Array}
}, {
    collection: 'Leave',
    versionKey: false
});
module.exports = mongoose.model('Leave', leaveSchema)