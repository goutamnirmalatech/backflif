const connection = require('../../Model/dbConnect');

const getemp = (req,res) => {
    let qurey = 'select * from emp';
    connection.query(qurey, function(error,result){
        if(error){
            console.log('error', error.sqlMessage)
        }
        else{
            res.send(result);
        }
    })
}

const postemp = (req,res) => {
    let data = req.body;
    let qurey = 'INSERT INTO emp SET =?';
    connection.query(qurey, data, function(error,result){
        if(error){
            console.log('error', error.sqlMessage)
        }
        else{
            res.send(result);
        }
    })
}
const patchemp = (req,res) => {
    let data = [req.body.ename,req.params.eid]
    let qurey = 'UPDATE emp SET ename = ? WHERE eid = ?';
    connection.qurey(qurey,function(error,result){
        if(error){
            console.log('error', error.sqlMessage)
        }
        else{
            console.log(result)
        }
    })
}

const putemp = (req,res) => {
    let data =[req.body.ename,req.params.eid]
    let qurey = 'UPDATE emp SET ename = ? WHERE eid =?';
    connection.qurey(qurey,function(req,res){
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            console.log(result)
        }
    })
}


const deleteemp = (req,res) => {
    let data =req.body.eid
    let qurey ='DELETE FROM emp WHERE eid =?';
    connection.qurey(qurey,function(req,res){
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            console.log(result)
        }
    })
}
module.exports = {getemp,postemp,patchemp,putemp,deleteemp}