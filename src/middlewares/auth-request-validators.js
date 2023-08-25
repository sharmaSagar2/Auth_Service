const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success:false,
            data:{},
            message:'data invalid',
            err : 'email or password missing in  reqeust'
        })
    }
    next();
}

module.exports ={
    validateUserAuth
}