import { Response, Request } from 'express'
import { Movies } from '../models'

const moviesController = async (_: Request, res: Response) => {
	const movies = await Movies.find().sort({ title: 1 })
	res.render('index', { movies })
}

export default moviesController
