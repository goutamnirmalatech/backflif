

const Joi = require("joi");

const empSchema = Joi.object({
    eid:Joi.string().required(),
    ename:Joi.string().required(),
    mobile: Joi.string().required(),
    aadhar: Joi.string().required()
})

const validationSchema = (req,res,next) => {
    const {error} = empSchema.validate(req.body);
    if(error){
        return res.send('Invalid req');
    }
    next()
}

module.exports = validationSchema;