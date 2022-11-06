const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    user_id: {type: String},
    name: { type: String },
    lastname: { type: String },
    phone: {type: String},
    email: {type: String},
    level: {type:String},
    username: { type: String, unique: true },
    active: {type: Boolean},
    password: { type: String },
    role_id: { type: Schema.Types.ObjectId,Ref: 'Role'},
    position_id: { type: Schema.Types.ObjectId,Ref: 'Position'},
    department_id: {type: Schema.Types.ObjectId,Ref: 'Department'},
    token: { type: String }
},{
    collection: 'User',
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('User', userSchema);