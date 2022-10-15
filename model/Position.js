const mongoose = require('mongoose');
const { Schema } = mongoose;

const Positiondata = new mongoose.Schema({
      name: String
},{
      collection: 'Position',
      versionKey: false
  }  
)

module.exports = mongoose.model('Position', Positiondata)