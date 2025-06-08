// require("dotenv").config({path: './env'}); // load environment variables from .env file
import dotenv from "dotenv";


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";  // import the database name constant from constants.js
import connectDB from "./db/index.js"; // import the connectDB function from the db/index.js file

dotenv.config({
    path: './env', // load environment variables from .env file
})


connectDB() // call the connectDB function to connect to the database








/* first approach to connect to the database and start the server

import express from "express";
const app = express();


(async () => {           //iife (immediately invoked function expression) 
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)    // connect to the database 
        app.on("error", () => {    // handle error event basically if the server is not able to start or express is not able to start
            console.error("Error connecting to the database: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {  // start the server on the port specified in the environment variable PORT
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR: ", error);
        throw error;

    }
})()   
*/   