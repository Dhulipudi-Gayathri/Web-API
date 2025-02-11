const mongoose=require("mongoose")
// const dotenv=require("dotenv")
const express=require("express")
const app=express()

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!"],
        unique:true
    },
    description:String,
    duration:{
        type:Number,
        required:[true,"Duration must be specified"]
    },
    rating:Number,
    totalRatings:Number,
    releaseYear:{
        type:Number,
        required:[true,"Release year is required"]
    },
    releaseDate:{
        type:Number,
        required:[true,"Release Date is required"]
    },
    created:{
        type:Number,
        default:Date.now()
    },
    geners:{
        type:String,
        required:[true,"Genere is required"]
    },
    director:{
        type:String,
        required:[true,"Director is required"]
    },
    actors:{
        type:[String],
        required:[true,"Actors are required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    }
})

movieModel=mongoose.model("Movies",movieSchema)

module.exports=movieModel;
