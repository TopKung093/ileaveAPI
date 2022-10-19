const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    user_id: {type: String},
    name: { type: String },
    lastname: { type: String },
    phone: {type: String},
    email: {type: String},
    sick_leave: {type: Number},
    personal_leave: {type: Number},
    vacation_leave: {type:Number},
    level: {type:String},
    username: { type: String, unique: true },
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