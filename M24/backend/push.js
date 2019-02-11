var mongoose  = require('mongoose')

var fs = require('fs')
var fileName = __dirname + '/members.json';


var head = fs.readFileSync(fileName,'utf-8');

var info = JSON.parse(head);


mongoose.connect('mongodb://test:pra1nav@ds117545.mlab.com:17545/todo_list_db',{ useNewUrlParser: true });


var db = mongoose.connection;

db.on("error",console.error.bind(console,"connection error"))
db.once("open",function(callback){
    console.log("connected to db");
})


var Schema = mongoose.Schema;

var membersSchema = new Schema({
    firstname : String,
    number: String,
    email: String,
    password: String,
    address: Array,
    cart: Array,
    wallet: Number
})


var members = mongoose.model("members",membersSchema);

for (var i = 0; i < info.length;i++) {
    var obj = new members(info[i]);
    obj.save(function(error){
        if (error) throw error;
        console.error(error);
    })
}
