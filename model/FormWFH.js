const mongoose = require('mongoose');
const { Schema } = mongoose;

const formwfh = new mongoose.Schema({

    detail: { require: true, type: String },
    status: { require: true, type: Boolean },
    sdate: { require: true, type: Date },
    edate: { require: true, type: Date },
    distance: { type: Number, },
    image: { type: Array, require: true },
    user_id: { require: true, type: Schema.Types.ObjectId, },
    ltype_id: { require: true, type: Schema.Types.ObjectId, },
}, { collection: 'FormWFH', timestamps: true, versionKey: false })
module.exports = mongoose.model('FormWFH', formwfh)