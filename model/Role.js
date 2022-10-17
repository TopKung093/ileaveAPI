const mongoose = require('mongoose');
const { Schema } = mongoose;

const roledata = new mongoose.Schema({
      name:{ type: String}
}, 
{
      collection: 'Role',
      versionKey: false
})
module.exports = mongoose.model('Role', roledata,)