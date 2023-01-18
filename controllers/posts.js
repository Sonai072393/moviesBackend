import moviesList from "../models/MoviesList.js";

export const getMovies = async (req, res) => {
  console.log("reched here")
    try {
      res.status(201).json(moviesList);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };