const express = require('express');
const router = express.Router();
const passport = require('passport');
// const passportConfig = require('../auth/auth');
const JWT = require('jsonwebtoken');
const User = require('../modules/userModule');

router.post('/signup', (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            return res.status(500).json({
                message: 'Erorr As Occured!'
            })
        if (user)
            return res.status(400).json({
                message: 'Username already taken!'
            })
        else {
            const newUser = new User({ firstName, lastName, email, password, confirmPassword });
            newUser.save(err => {
                if (err)
                    return res.status(500).json({
                        message: 'Erorr As Occured!'
                    })
                else
                    return res.status(201).json({
                        message: 'Account successfully created!'
                    })
            })
        }
    })
});

const signToken = userID => {
    return JWT.sign({
        iss: "Coder",
        sub: userID
    }, "Coder", { expiresIn: "1h" });
}

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {

    if (req.isAuthenticated()) {
        const { _id, email } = req.user;
        const token = signToken(_id)
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({
            isAuthenticated: true,
            user: { email }
        })
    }
})

module.exports = router;



