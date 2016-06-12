var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

/*var newUser = new User ({
    email: "dino@hrog.org",
    name: "Dino Hrog"
});

newUser.posts.push({
    title: "Beer Brewing",
    content: "Just go to the shops and buy one. Now know how to make your own beer"
});

newUser.save (function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

var newPost = new Post({
    title: "Meditation",
    content: "Meditation is the key to self-awareness"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post)
    }
});*/

User.findOne({name: "Dino Hrog"}, function(err, user){
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Love Birds",
            content: "Go out early in the morning and see for yourself"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});