const Movie=require("./../Model/movieModel")
const mongoose=require("mongoose")

exports.getAllMovies=async (req,res)=>{
    const movie=await Movie.find()
    res.status(200).json({
        status:"success",
        count:movie.length,
        data:{
           movie
        }
    })
}

exports.getMovie=async (req,res)=>{
    try{
        const id=req.params.id;
        const movie=await Movie.find({_id:id})
        res.status(200).json({
            status:"success",
            data:{
               movie
            }
        })
    }
   catch(err){
    console.log("Some error occurred "+err)
   }

}

exports.createMovie= (req,res)=>{
    // const movie=new Movie({
    //     name:"Gayathri",
    //     description:"Gayathri's debut movie",
    //     duration:90,
    //     rating:4.5
    // })
    try{
        const movie= new Movie(req.body)
            movie.save()
            res.status(201).json({
            status:"success",
            data:{
                movie
            }})
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:"Some error occured "+err
        })
    }
    
}

exports.updateMovie=async (req,res)=>{
    try{
        const update=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(201).json({
            status:"success",
            data:{
                movie:update
            }
        })
        }
        catch(err){
            console.log("Some error occurred "+err)
        }

    
}

exports.deleteMovie=async (req,res)=>{
    try{
        const del=await Movie.findByIdAndDelete(req.params.id,{new:true})
        res.status(200).json({
            status:"success",
            data:{
                deletedMovie:del
            }
        })
    }
    catch(err){
        console.log("Some error occurred "+err)
    }
}