const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const admin = require('../models/admin');


passport.use(new googleStrategy({
        clientID: '621205836751-1e8oknqd8f2v6dob945klp76c8ajabqk.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:8000/admin/auth/google/callback",
    },

    function(accessToken, refreshToken, profile, done){
        // find a user
        admin.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                admin.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));


module.exports = passport;