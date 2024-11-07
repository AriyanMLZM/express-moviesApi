import { Response, Request } from 'express'
import { Movies } from '../models'

const moviesController = async (_: Request, res: Response) => {
	const movies = await Movies.find()
	res.render('index', { movies })
}

export default moviesController
