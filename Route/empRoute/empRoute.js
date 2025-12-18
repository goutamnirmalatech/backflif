const express = require('express');
const empRoute = express.Router();
const  {getemp, postemp, deleteemp, putemp, patchemp} = require('../../Controller/empController/empController');
const validateSchema = require('../../Controller/empController/empValidation')


empRoute.get('/view12',getemp);
empRoute.post('/add12', validateSchema,postemp);
empRoute.delete('/delete12/:pid', deleteemp);
empRoute.put('/odd12/:pid',putemp);
empRoute.patch('/update12/:pid',patchemp);


module.exports = empRoute;