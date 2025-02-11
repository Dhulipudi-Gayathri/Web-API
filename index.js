const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const app=express()
const movieRoutes=require("./Router/movieRouter")

dotenv.config({path:"./config.env"})

app.use(express.json())
app.use("/api/v1/movies",movieRoutes)



mongoose.connect(process.env.REMOTE_STR,{
    useNewUrlParser:true
}).then((conn)=>{
    console.log(conn)
    console.log("DB connection established")
}).catch(err=>{
    console.log("Some error occured "+err)
})

// const movieSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,"Name is required!"]
//     },
//     description:String,
//     duration:{
//         type:Number,
//         required:[true,"Duration must be specified"]
//     },
//     ratings:Number
// })

// const movieModel=mongoose.model("Movies",movieSchema)

// // const doc=new movieModel({
// //     name:"movie 2",
// //     description:" movie horror",
// //     duration:90,
// //     ratings:3.0
// // })
// // doc.save()
// .then(doc=> console.log(doc))
// .catch(err=> console.log("some error occurred"+ err))
app.listen("8080",()=>{
    console.log("Server started")
})