const mongoose = require('mongoose');
const { Schema } = mongoose;
const budgetSchema = new mongoose.Schema({
    offsitetype: { require: true, type: String },
    date: { require: true,type: Date },
    place: { require: true, type: String },
    detail: { require: true, type: Array },
    cash: { require: true,type: Array},
    total: { require: true, type: Number },
    status: {require:true, type:String},
    user_id: { require: true, type: Schema.Types.ObjectId, Ref: 'User' },

}, {
    collection: 'Budget',
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('Budget', budgetSchema)