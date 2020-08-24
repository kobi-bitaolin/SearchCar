const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../auth/passport');
const JWT = require('jsonwebtoken');
const User = require('../modules/userModule');

const signToken = userID => {
    return JWT.sign({
        iss: "Code",
        sub: userID
    }, "Code", { expiresIn: "1h" });
}

router.post('/signup', (req, res) => {
    const { username, lastName, email, password } = req.body;
    User.findOne({ username }, (err, user) => {
        console.log('Sign up user:',user);
        if (err)
            res.status(500).json({
                message: { Body: "Error has occured Inside find", Error: true }
            });
        if (user)
            res.status(400).json({
                message: { Body: "Username is already taken ", Error: true }
            });
        else {
            const newUser = new User({ username, lastName, email, password });
            newUser.save(err => {
                if (err)
                    res.status(500).json({
                        message: { Body: "Error has occured Create user", Error: true }
                    });
                else
                    res.status(201).send({
                        username, lastName, email
                    });
            });
        }
    });
});



router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username } = req.user;
        const token = signToken(_id)
        res.cookie("access_token", token, { httpOnly: true, sameSite: true });
        res.status(200).json({
            isAuthenticated: true,
            user: { username }
        })
    }
});



router.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "" }, success: true })
});


// router.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { username } = req.user;
//     res.status(200).json({ isAuthenticated: true, user: { username } });
// });






module.exports = router;



