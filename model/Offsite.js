const mongoose = require('mongoose');
const { Schema } = mongoose;

const offsitedata = new mongoose.Schema({
    location: { require: true, type: String },
    detail: { require: true, type: String },
    date: { require: true, type: Date },
    time: { require: true, type: String },
    to_distance: { type: Number, },
    return_distance: { type: Number, require: true },
    budget: { type: Number, require: true },
    status: { type: String, require: true },
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },
}, {
    collection: 'WorkOffsite',
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('Offsite', offsitedata)