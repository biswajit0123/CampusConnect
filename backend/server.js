const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const main = require('./db.js')
const userRoute = require('./router/user.route.js');
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;
const cors = require('cors');
const postRoute = require('./router/post.route.js')
const commentRoute = require('./router/comment.route.js')
const adminRoute = require('./router/admin.route.js')
const campusRoute = require('./router/campus.route.js')

//database connection
main();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173', 
    credentials:true
}));

    app.use('/auth',userRoute);
    app.use('/post',postRoute);
    app.use('/comment', commentRoute);
    app.use('/admin',adminRoute )
    app.use('/campus', campusRoute)

app.get('/test', (req, res)=>{
res.status(201).json({msg:"ok"});
})

app.listen(port, () => {
    console.log("Server is listening at http://localhost:3000");
});
