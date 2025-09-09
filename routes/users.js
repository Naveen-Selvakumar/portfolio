const express=require('express')
const router=express.Router()    //router acts as app
router.get("/",(req,res) =>{
    res.send("User List")
})

router.get("/new",(req,res) =>{
    res.send("User new List")
})

router.post("/",(req,res)=>{
    res.send("New User")
})

router.get("/:id",(req,res)=>{
    //req.params.id
    res.send(`User get with id ${req.params.id}`)
}
).put("/:id",(req,res)=>{
    //req.params.id
    res.send(`User put with id ${req.params.id}`)
}
).delete("/:id",(req,res)=>{
    //req.params.id
    res.send(`User delete with id ${req.params.id}`)
}
)

router.param("id",(req,res,next,id)=>{
    console.log(id)
    next()
})



module.exports=router
