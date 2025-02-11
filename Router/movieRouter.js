const express=require("express")
const moviesController=require("./../Controller/movieController")

const router=express.Router()

router.route("/")
.get(moviesController.getAllMovies)
.post(moviesController.createMovie)

router.route("/:id")
.get(moviesController.getMovie)
.put(moviesController.updateMovie)
.delete(moviesController.deleteMovie)

module.exports=router