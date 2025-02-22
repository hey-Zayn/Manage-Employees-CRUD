const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")
const connectionDB = require("./DB/database.connection");
const userRouter = require("./Routes/user.route")

const port = process.env.PORT;     

app.use(cors());
app.use(express.json())

app.use('/crud/v1/api',userRouter);

app.get("/",(req,res)=>{
    res.send("Hello from Server");
});


connectionDB()

app.listen(port,()=>{
    console.log(`server is running on port http//:localhost:${port}`)
})