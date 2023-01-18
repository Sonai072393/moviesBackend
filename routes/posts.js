import express from 'express'


//controllers
import { 
    getMovies,
} from '../controllers/posts.js';
const router = express.Router();

//Movies api's

router.post('/moviesList',getMovies)
router.get('/moviesList',getMovies)

export default router;