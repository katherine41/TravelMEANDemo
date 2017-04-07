/**
 * Created by Katherine on 2016/6/6.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports=function(app,models){
    var BUserModel=models.BUserModel;

    app.get("/auth/facebook",passport.authenticate('facebook'));
    app.get("/auth/facebook/callback", passport.authenticate('facebook', {
        successRedirect: '/BostonTrip/index.html#/profile',
        failureRedirect: '/BostonTrip/index.html#/login'
    }));

    app.get("/BostonTrip/api/user",getUsers);
    app.get("/BostonTrip/api/loggedIn",loggedIn);
    app.post("/BostonTrip/api/logout",logout);
    app.post("/BostonTrip/api/user",createUser);
    app.put("/BostonTrip/api/user/:userId",updateUser);
    app.delete("/BostonTrip/api/user/:userId",deleteUser);

    app.get("/BostonTrip/api/user/:userId",findUserById);
    app.post("/BostonTrip/api/login",passport.authenticate('BostonTrip'),login);


    // app.put("/api/user/:userId",updateUser);
    // app.delete("/api/user/:userId",deleteUser);

    passport.use('BostonTrip',new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);


    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL
    };

    passport.use('facebook',new FacebookStrategy(facebookConfig,facebookLogin));

    function localStrategy(username, password, done) {
        BUserModel
            .findUserByEmail(username)
            .then(
                function(user) {
                    if (!user) {
                        return done(null, "400");
                    }
                    if(user.email===username&&user.password===password) {
                        return done(null, user);
                    }
                    else {
                        return done(null, "404");
                    }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }
    function deserializeUser(user, done) {
        BUserModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function login(req,res) {
        var user=req.user;
        if(user!=="404"){
            res.json(user);
        }
        else if(user==="404"){
            res.send("404")
        }
        else if(user==="400"){
            res.send("400")
        }
    }

    function getUsers(req,res){
        var email=req.query['email'];
        var password=req.query['password'];
        if(email&&password){
            findUserByCredentials(email,password,res);
        }
        else if(email){
            findUserByEmail(email,res);
        }
        else{
            res.send(400);
        }
    }
    function findUserByCredentials(email,password,res) {
        BUserModel
            .findUserByCredentials(email,password)
            .then(
                function (user){
                    res.json(user);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function findUserByEmail(email,res) {
        BUserModel
            .findUserByEmail(email)
            .then(function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(404).send(err);
                });
    }
    function findUserById(req,res){
        var userId=req.params.userId;
        BUserModel
            .findUserById(userId)
            .then(function(user){
                    res.send(user);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function createUser(req,res){
        var newUser = req.body;
        BUserModel.findUserByEmail(newUser.email)
            .then(
                function(user){
                    if(user){
                        res.send("0");
                    }
                    else if(!user){
                        BUserModel.createUser(newUser)
                            .then(
                                function(user){
                                    res.json(user);
                                },
                                function(error){
                                    res.send(400);
                                }
                            );
                    }
                }
            )
    }

    function facebookLogin(token, refreshToken, profile, done){
        BUserModel
            .findFacebookUser(profile.id)
            .then(
                function(facebookUser){
                    if(facebookUser){
                        return done(null,facebookUser);
                    }
                    else{
                        facebookUser={
                            username:profile.displayName.replace(/ /g,''),
                            facebook:{
                                token:token,
                                id:profile.id,
                                displayName:profile.displayName
                            }
                        };
                        BUserModel
                            .createUser(facebookUser)
                            .then(
                                function(user) {
                                    done(null, user);
                                }
                            );
                    }
                }
            );
    }
    function loggedIn(req,res){
        console.log(req.sessionStore.sessions);
        res.json(req.sessionStore.sessions);
        // console.log(req.user);
        // if(req.isAuthenticated()){
        //     res.json(req.user);
        // }else{
        //     res.send("0");
        // }
    }

    function logout(req,res){
        req.logout();
        res.send(200);
    }
    function updateUser(req,res){
        var userId=req.params.userId;
        var user=req.body;
        BUserModel
            .updateUser(userId,user)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function deleteUser(req,res){
        var id=req.params.userId;
        BUserModel
            .deleteUser(id)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
};