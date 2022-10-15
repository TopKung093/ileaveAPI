const mongoose = require('mongoose');
const { Schema } = mongoose;

const roledata = new mongoose.Schema({
      name: String
}, 
{
      collection: 'Role',
      versionKey: false
})
module.exports = mongoose.model('Role', roledata,)