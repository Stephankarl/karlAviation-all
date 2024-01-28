const User = require('../models/User')

const asyncHandler = require('../middleware/asyncHandler')
const getToken = require('../utils/handleToken')

exports.updateUser = asyncHandler( async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    const token = await getToken(user)
    
})