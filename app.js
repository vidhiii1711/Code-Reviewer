const express =require ('express')
const airoutes=require ('./routes/ai.routes')
const cors=require('cors')  //express server do not allow any information to be shared with anyone , fr chahe wo frontend se integrate hi kyu n krna ho backend ko.... hmara backend ki sari info frontend tk jaye iske liye hum 'core' package ko install krte h
const app=express()              //server is created

app.use(cors());
app.use(express.json())
app.get('/',(req,res) => {
    res.send("Hello")
})
app.use('/ai',airoutes)    //any req starting from '/ai' will go to 'airoutes' page
module.exports=app