var Schedule = require('../models/schedule');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
    signup
};

async function signup(req, res) {
    console.log(req.body);
    const user = new User(req.body);
    console.log(user)
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}



/*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        SECRET,
        { expiresIn: '24h' }
    );
}