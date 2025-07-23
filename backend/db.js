const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL;

function main(){
   try {
    mongoose.connect(connectionString);
    console.log("database connected succesfully");
   } catch (error) {
 console.log("error occured ", error);    
   }
}


module.exports = main