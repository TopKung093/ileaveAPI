const mongoose = require('mongoose');
const { Schema } = mongoose;

const Positiondata = new mongoose.Schema({
      name:{ type: String}
},{
      collection: 'Position',
      versionKey: false
  }  
)

module.exports = mongoose.model('Position', Positiondata)