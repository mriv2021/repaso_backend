const express=require("express")
const app=express()

app.get("/", function(request, response){
    response.send("hola mundo")
})

app.get("/home", function(request, response) {
    response.send("master")
})
app.listen(5000)
