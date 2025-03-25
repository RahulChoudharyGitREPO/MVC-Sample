import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/userController.js";
const cors = require('cors')
require('dotenv').config()

const PORT = 8000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());




mongoose.connect("mongodb+srv://rahulrajwwe2:NmSAs0z1azDDvRwm@cluster0.jcrzs.mongodb.net/", {
    dbname: "NodeJs_Mastery_course"
}).then(() => {
    console.log("Connected to Database")
}).catch((err) => {
    console.log(err)
})




app.post('/users', userRegister)


app.get('/', (req, res) => {
    res.render('index.ejs')
})







app.listen(PORT, () => console.log(`Listening On PORT ${PORT}`))