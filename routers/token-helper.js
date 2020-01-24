const jwt = require('jsonwebtoken')
const User = require('../models/user')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        console.log('Recived token: ', authorization)
        return authorization.substring(7)
    }
}

const verifyToken = async (token) => {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({
            error: 'Token missing or invalid'
        })
    }
    const user = await User.findById(decodedToken.id)
    return user
}

module.exports = {
    getTokenFrom,
    verifyToken
}