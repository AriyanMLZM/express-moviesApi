import { Response, Request } from 'express'

const moviesController = (_: Request, res: Response) => {
	res.render('index')
}

export default moviesController
