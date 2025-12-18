const Joi = require("joi");

const productSchema = Joi.object({
    pname:Joi.string().required(),
    pid:Joi.string().required()
})

const validationSchema = (req,res,next) => {
    const {error} = productSchema.validate(req.body);
    if(error){
        return res.send('Invalid req');
    }
    next()
}

module.exports = validationSchema;