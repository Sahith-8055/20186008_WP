var express = require('express')

var bodyParser = require('body-parser')

var mongoose = require('mongoose')

var cors = require('cors')

var app = express();

var guestoruser = "guest";
var products = require('./models/products');
var users = require('./models/user');
var Orders = require('./models/orders');

app.set('view engine', 'ejs');
mongoose.connect('mongodb://pranay:251611ypk@ds125588.mlab.com:25588/wp-project',{ useNewUrlParser: true });
app.use(cors());
var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended:false});
var router = express.Router();

app.use('/',router);

app.listen(4000,function(){
    console.log('Server listening on port 4000')
});

router.post('/products/add/post', urlencodedParser , (req,res) => {
    console.log(req.body);
    var newProduct = {
    imageurl:[req.body.imageurl1 + ".jpg", req.body.imageurl2+".jpg", req.body.imageurl3+".jpg", req.body.imageurl4+".jpg"],
    id: req.body.id,
    category: req.body.cat,
    brand: req.body.brand,
    title: req.body.title,
    shortdescription: req.body.shortdes,
    longdescription: req.body.longdes,
    price: req.body.price,
    quantity: req.body.quantity,
    count: 0,
    rating: [],
    comments: []
    }
    let product = new products(newProduct);
    product.save().then(product => {
        res.redirect('/products/add');
        // console.log("Product Added Successfully");
    })
    .catch(err => {
        // console.log('Failed to create new record');
        res.redirect('/products/add');
    });

    
})

// add a user and login a user
router.post('/user/add', jsonParser , (req, res) => {
    let user = new users(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.post('/user/login', jsonParser, (req,res) => {
    users.findOne({email : req.body.email, password : req.body.password},function(err, result){
        if(err) {
            throw err;
        }
        if(result) {
            // console.log(result._id);
            guestoruser = result._id;
            res.send(guestoruser);
        }
    });
});

// router.get('/user',function(req,res) {
//     console.log(guestoruser + " guest or user")
//     res.send(guestoruser);
// });

router.route('/user').get(function(req,res) {
    res.json(guestoruser);
});

router.get('/logout', (req,res) => {
    guestoruser = "guest";
    res.json("success");
});

// display products list and product view
router.get('/products/add', (req, res) => {
    res.render('productsadd');
})
router.get('/products',(req,res) => {
    products.find({}, function(err, data) {
        if(err) throw err;
        //console.log(guessOrUser);
        res.send([data,guestoruser]);
    })
})

router.post('/product/details',jsonParser, (req,res) => {
    // var id = req.params.id;
    // console.log(req.body.id);
    products.findOne({id:req.body.id}, function(err, data) {
        if(err) throw err;
        res.send([data,guestoruser]);
    })
})

// router.route('/getallProducts').get(function(req,res) {
//     products.find({}, function(err, data) {
//             if(err) throw err;
//             //console.log(guessOrUser);
//             res.send(data);
//         })
// });

// router.get('/getproduct/:id', function(req,res) {
//     var id = req.params.id;
//     products.findById(id, function(err, data) {
//         if(err) throw err;
//         res.send(data);
//     })
// })


// add to cart
router.post('/user/addcart', jsonParser, (req,res) => {
    // console.log(req.body);
    users.findOne({"cart.product" : req.body.prodid}, function(err,result) {
        if(guestoruser == "guest") {
            res.send(false);
        } else {
            if(result) {
                res.json("exists");
            } else {
                users.update({_id : req.body.userid},{ $push : { cart : [{product : req.body.prodid, 
                    title : req.body.title,
                    image : req.body.image,
                    price : req.body.price,
                    need : req.body.need, 
                    quantity : req.body.quantity
                    }]}}, function(err, data){
                            res.send(true);
                    });
            }
        }
        
    });
})

// for cart functionalities
router.route('/getCartItems/:id').get(function(req,res) {
    // console.log(guestoruser);
    users.findById(req.params.id, function(err, data) {
        if(err) throw err;
        res.send(data);
    })
});

router.route('/user/changeCart').post(jsonParser, function(req,res) {
    console.log(req.body);
    users.update({_id : req.body.userid, "cart.product" : req.body.prodid},{ $set : {"cart.$.need" : req.body.quantity }}, function(err, data){
        res.json("Updated Successfully");
    });
});

router.route('/user/removeFromCart').post(jsonParser, function(req,res) {
    users.update({_id : req.body.userid},{ $pull: {cart : {product : req.body.prodid}}}, function(err, data){
        res.json("Updated Successfully");
    });
});

// for user comments
router.route('/product/comment').post(jsonParser, function(req,res) {
    var name = "anonymous";
    console.log(req.body.userid);
    users.find({_id:req.body.userid}, function(err,data) {
    name = data[0].firstname;
    products.update({_id : req.body.prodid},{ $push : { comments : [{name : name, comment : req.body.comment}]}}, function(err, data){
            res.json("Comment Posted Successfully");
        });
    });
});

// for profile- user details
router.route('/getUserDetails/:id').get(function(req,res) {
    users.findById(req.params.id, function(err, data) {
        if(err) throw err;
        res.send(data);
    })
});

router.route('/user/addAddress').post(jsonParser, function(req,res) {
    users.update({_id : req.body.userid},{ $push : { address : req.body.address}}, function(err, data){
        if(data) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

router.route('/orders/add').post(jsonParser, (req, res) => {
    // let order = new Orders(req.body);
    // order.save()
    //     .then(order => {
    //         res.status(200).json({'user': 'Added successfully'});
    //     })
    //     .catch(err => {
    //         res.status(400).send('Failed to create new record');
    //     });
        for(var i = 0 ; i < req.body.cart.length; i++) {
            products.update({id : req.body.cart[i].product},{ $inc : { quantity : -req.body.cart[i].need}}, function(err, data){
                // res.json("Comment Posted Successfully");

            });
        }
    users.update({_id : req.body.userid},{ $set : { cart : []}}, function(err, data){
    });
});

