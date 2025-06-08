import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // here we import the database name


const connectDB = async () => { 
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)   // connect to the database using the MONGODB_URI from environment variables and the DB_NAME constant
           console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);  // log the host of the database connection 
           
        
    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1);   // Exit process with failure
        
    }
}
export default connectDB  // export the connectDB function so it can be used in other files