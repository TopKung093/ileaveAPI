const mongoose = require('mongoose');
const { Schema } = mongoose;

const Departmentdata = new mongoose.Schema({
      name:{ type: String}
},{
      collection: 'Department',
      versionKey: false
  }  
)

module.exports = mongoose.model('Department', Departmentdata)