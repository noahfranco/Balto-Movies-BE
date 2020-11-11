const router = require('express').Router()

const movies = require("../models/movieModels")

// http://localhost:4000/api/movies/post
router.post("/post", async (req, res) => {
    try {
        const movieBody = req.body;
        const postMovie = await movies.add(movieBody);
        res.status(200).json(postMovie) 
    } catch (error) {
        res.status(500).json({error: "not posting"}, error.message)
    }
})

// http://localhost:4000/api/movies/get
router.get("/get", async (req, res) => {
    try {
        const getMovies = await movies.find();
        res.status(200).json(getMovies);
    } catch(error) {
        res.status(500).json({error: error});
    }
})


module.exports = router;