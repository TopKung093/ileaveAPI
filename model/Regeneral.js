const mongoose = require('mongoose');
const { Schema } = mongoose;

const generaldata = new mongoose.Schema({
    regtype: {require: true, type:String},
    detail: { require: true,type: String },
    date: { require: true, type: Date },
    approver: { require: true, type: String },
    cite:{require:true,type: String},
    status: {require: true,type: String},
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
}, {
    collection: 'Regeneral',
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('regeneral', generaldata)