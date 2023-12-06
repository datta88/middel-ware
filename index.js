import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connection = async ()=>{
    const conn = await mongoose.connect(process.env.Mongo_url);
    if(conn){
        console.log(`MongoDB connectd`);
    }
}

const PORT = process.env.PORT || 5000;

app.listen (PORT ,()=>{
    console.log(`Server is running PORT ${PORT}`);
    connection()
})