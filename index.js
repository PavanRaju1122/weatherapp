const axios=require("axios")
const express = require('express')
const app = express()
const port = 3001
const API="9d1494162e5981aa971447eb7c19fcf2"
app.use(express.json())


app.get("/",async (req,res)=>{
    const City = req.body.city;
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API}`
    try{
        const response= await axios.get(ApiUrl);
        res.json({data:response.data})
    }catch(error){
        res.send(error)
    }
    
    

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))