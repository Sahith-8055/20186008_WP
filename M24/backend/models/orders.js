//imported mongoode
var mongoose = require('mongoose');

//Declared schema for the products
const schema = mongoose.Schema;

//Created new Schema for the products
var orderSchema = new schema ({
      userid :String,
      name :String,
      phone : String,
      email : String,
      address: String,
      cart : Array,
      totalPrice :String
});

//Exported reference model
module.exports = mongoose.model('orders', orderSchema);