const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    facebookUserID: {type: String},
    authMethod: {type: String}
});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err)
        this.password = passwordHash;
        next();
    })
})

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err)
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    })
}

const User = mongoose.model('User', UserSchema);
module.exports = User;

