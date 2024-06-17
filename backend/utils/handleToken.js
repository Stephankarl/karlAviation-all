const jwt = require('jsonwebtoken')

const generateToken = async (user) => {
    const token = jwt.sign({
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    return token
}

module.exports = generateToken