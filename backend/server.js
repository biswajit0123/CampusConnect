const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const main = require('./db.js')
const userRoute = require('./router/user.route.js');

const port = process.env.PORT || 5000;

//database connection
main();
app.use(express.json())
app.use('/auth',userRoute);

app.listen(port, () => {
    console.log("Server is listening at http://localhost:3000");
});
