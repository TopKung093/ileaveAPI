const mongoose = require('mongoose');
const { Schema } = mongoose;
const budgetSchema = new mongoose.Schema({
    travelby: {require: true, type: String},
    place: { require: true, type: String },
    detail: { require: true, type: String },
    forward: {require:true,type: Number},
    approver: { require: true, type: String },
    backward: {require:true,type: Number},
    cash: { require: true,type: Number},
    status: {require:true, type:String},
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
}, {
    collection: 'Budget',
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('Budget', budgetSchema)