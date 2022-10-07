const jwt = require('jsonwebtoken')



exports.generateToken = (id) => {
    return jwt.sign({}, process.env.JWT_SECRET,{expiresIn:"20d"})
}
