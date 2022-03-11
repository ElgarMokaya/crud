const express=require('express')
const Student=require('./src/models/student')
const appRouter=require('./src/Routes/routes')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()


require('dotenv').config()
app.use(bodyParser.json({}))
app.use(cors())

const PORT=process.env.PORT
app.use('/',appRouter)
app.listen(PORT,()=>{
    console.log(`app listening on port http://localhost:${PORT}`);
})