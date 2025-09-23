require('dotenv').config();
const app = require("./src/app");
const connectDb = require('./src/db/db')

connectDb()
const PROT = process.env.PROT || 3000

app.listen(PROT,()=>{
    console.log("server is runing on port 3000")
})