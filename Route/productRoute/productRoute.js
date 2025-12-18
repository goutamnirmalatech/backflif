const express = require('express');
const productRoute = express.Router();
const  {getproduct, postproduct, deleteproduct, putproduct, patchproduct} = require('../../Controller/productController/productController');
const validateSchema = require('../../Controller/productController/productValidation')


productRoute.get('/viewpro', getproduct);
productRoute.post('/addpro',validateSchema , postproduct);
productRoute.delete('/deletepro/:pid', deleteproduct);
productRoute.put('/oddpro/:pid',putproduct);
productRoute.patch('/updatepro/:pid',patchproduct);


module.exports = productRoute;