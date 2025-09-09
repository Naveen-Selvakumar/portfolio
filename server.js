const express=require('express')
const app=express()
const bp=require('body-parser')
//app.use(logger)


app.use(bp.urlencoded())

app.get('/name',(req,res) =>{
    console.log('naveen')
    
    res.status(200).json({message:"500 error"})
})

app.use('/sec',(req,res,next)=>{
    console.log("Second Middleware")
    res.send("Middleware Second")
    //next()
    
})
app.use('/',(req,res,next)=>{
    console.log("Middleware")
    next()
})

const userRouter=require('./routes/users')      //import from routes
const bodyParser = require('body-parser')
app.use("/users",userRouter)       // use()

/*function logger(req,res,next){
    console.log(req.originalurl)
    next()
}*/



app.get('/add', (req, res) => {
    res.send(`
        <h1>Add Product</h1>
        <form action="/store" method="post">
            <input type="text" name="title"/>
            <input type="submit" value="submit"/>
        </form>
    `)
})
app.post('/store',(req,res)=>{
    console.log(req.body)
    res.send("Product added")
})
app.listen(3000)