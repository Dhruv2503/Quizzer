const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
app.use(express.urlencoded());
app.use(express.static('./asset'));
app.use(cookieParser());
const admin=require('./models/admin');
const test=require('./models/test');
const question=require('./models/question');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const passportGoogle=require('./config/passport-google-oath');
app.use(express.urlencoded());

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    name: 'tripods',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    // store: new MongoStore(
    //     {
    //         mongooseConnection: db,
    //         autoRemove: 'disabled'
        
    //     },
    //     function(err){
    //         console.log(err ||  'connect-mongodb setup ok');
    //     }
    // )
}
));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});