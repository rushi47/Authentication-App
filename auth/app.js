var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost/authenticate");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
    secret: "authenticate",
    resave: false,
    saveUninitialized: true
}));

userSchema= new mongoose.Schema({
	username:"string",
	password:"string"
});

 var user=mongoose.model("user", userSchema);



 function authenticate (req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};





//routes

app.get("/", function(req, res){
	res.render("home");
});
app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", function(req, res){
	//var username=req.body.username;
	//var password=req.body.password;
	//res.send("hit the route");

var post = req.body;
  if (post.username === 'john' && post.password === 'johnp') {
    req.session.user_id = johns_user_id_here;
    res.redirect('/secret');
  } else {
    res.send('Bad user/pass');
  }

});


app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});


///////////////////=========================

//register
app.get("/register", function(req, res){
   res.render("register"); 
});


//handling user sign up
app.post("/register", function(req, res){
    var username=req.body.username;
    var password=req.body.password;
    user.create({username:username,
    			password:password}, function(err, data){
    					  if(err){
            				console.log(err);
            			return res.render('register');
       					 }else{
       					 	res.send("working");
       					 }
    			});
      
        
  });









////auth

app.get('/secret', auth, function (req, res) {
  res.send('if you are viewing this page it means you are logged in');
});



app.listen(4200, function(){
	console.log("server started");
});