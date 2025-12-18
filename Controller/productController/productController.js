const connection = require('../../Model/dbConnect',)

const getproduct = (req, res) =>{
    let query = 'SELECT * FROM product';
    connection.query(query, function(error, result){
        if(error){
             console.log('error', error.sqlMassage)
        }
        else{
             res.send(result);
        }
    })
}


const postproduct =(req,res) => {
    let query = 'INSERT INTO product SET pid =?';
    let data =  req.body;
    connection.query(query,data, function(error,result){
        if(error){
            console.log('error',error.sqlMessage)
        }
        else{
            res.send(result);
        }
    })
}

const putproduct = (req,res) =>{
    let query = 'UPDATE product SET ename = ? WHERE eid = ? ';
    let data =   [req.body.ename,req.params.pid]
    connection.query(query, data, function(error,result){
        if(error){
            console.log('error',error.sqlMassage)
        }
        else{
            res.send(result)
        }
    })
}

const patchproduct = (req,res) =>{
    let query = 'UPDATE emp SET ename = ? WHERE eid =?';
    let data = [req.body.ename,req.params.pid];
    connection.query(query,data, function(error,result){
        if(error){
        console.log('error',error.sqlMassage)
        }
        else{
            res.send(result);
        }
    })
}

const deleteproduct =(req,res) =>{
    let query =  'DELETE FROM emp WHERE eid =?';
    let data  =   req.params.eid
    connection.query(query,data, function(error,result){
        if(error){
            console.log('error',error.sqlMassage)
        }
        else{
            res.send(result);
        }
    })
}
module.exports = {getproduct,postproduct,patchproduct,putproduct,deleteproduct}