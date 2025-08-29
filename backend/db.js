const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL;

async function main(){
   try {
    await mongoose.connect(connectionString);
    console.log("database connected succesfully");
   } catch (error) {
 console.log("error occured  in database connection ", error.message);    
   }
}


module.exports = main