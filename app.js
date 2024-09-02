const express =require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var nodemailer = require('nodemailer');
const mongoose=require('mongoose')
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());








const newLocal = './routes/patientRoute';
const patientRoute = require(newLocal);

app.use('/',patientRoute);



mongoose.connect('mongodb+srv://rahul2483yadav:OycNLKTKvS7JeLxT@cluster0.3q3qi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});