const mongoose = require('mongoose');
const { Schema } = mongoose;

const leavetypedata = new mongoose.Schema({
      name:{ type: String}
}  ,
{
      collection: 'LeaveType',
      versionKey: false
  }
)

module.exports = mongoose.model('LeaveType', leavetypedata)