const express = require('express');
const nirmala = express();
const port = 5700;
nirmala.use(express.json())
const productRoute = require('./Route/productRoute/productRoute');
// const empRoute = require('./Route/empRoute/empRoute');



nirmala.use('/', productRoute)


// nirmala.use('/', empRoute)

nirmala.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
