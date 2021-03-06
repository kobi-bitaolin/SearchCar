const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy
const User = require('../modules/userModule');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}
// authorization endpoint
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "Code"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false)
        if (user)
            return done(null, user)
        else
            return done(null, false)
    })
}))

// authenticated local strategy uisng username and password
passport.use(new LocalStrategy({usernameField: 'email'},(email, password, done) => {
    User.findOne({ email }, (err, user) => {
        // something wrong with database
        if (err)
            return done(err);
        // if no user exist
        if (!user)
            return done(null, false)
        // check if password is correct
        user.comparePassword(password, done);
    })
}))
