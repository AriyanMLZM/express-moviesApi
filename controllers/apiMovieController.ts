import { Response, Request } from 'express'

const apiMovieController = (_: Request, res: Response) => {
	res.render('index')
}

export default apiMovieController
