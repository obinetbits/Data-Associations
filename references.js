var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

/*User.create({
    email: "greg@ymail.com",
    name: "Greg Dun"
});*/

/*Post.create({
    title: "How to swim part 3",
    content: "Just follow he steps in part 2"
}, function(err, post){
    if(err){
        console.log(err);
    } else {
         User.findOne({email: "greg@ymail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
    }
   
});*/ 

//Find User
//Find all posts for that user
User.findOne({email: "greg@ymail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});