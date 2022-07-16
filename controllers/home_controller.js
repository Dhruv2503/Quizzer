const admin = require('../models/admin');
const question=require('../models/question');
const test=require('../models/test');

const fs = require('fs');
const path = require('path');
const passport=require('passport');


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/admin')
    }

    return res.render('user-sign-up')
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/admin')
    }
    return res.render('user-sign-in')
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    admin.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error');return}

        if (!user){
            admin.create(req.body, function(err, user){
                if(err){console.log('error'); return}


                return res.render('user-sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    
    return res.redirect('/admin');
}

module.exports.destroySession = function(req, res){
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
      });
}


module.exports.home = function(req,res){
    return res.render("home");
}


