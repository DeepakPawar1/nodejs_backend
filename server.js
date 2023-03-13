import express  from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://dpk9111996:${process.env.db_pass}@cluster0.bkecu3w.mongodb.net/?retryWrites=true&w=majority`

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url,{})

//API Endpoints
app.get("/", (req,res)=> res.status(200).send("Hello Deepawar"))
app.post("/dating/cards",async (req,res)=>{
console.log(req.body , req.params,"In request");
const dbCard = req.body

 const data = await Cards.create(dbCard)
console.log(data);
res.send(data);
})

app.get("/dating/cards",async (req,res)=>{
const data = await Cards.find()
res.send(data);
})



//Listener

app.listen(port,()=> console.log("he bholya shankara"));
