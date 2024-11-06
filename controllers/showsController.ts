import { Response, Request } from 'express'

const showsController = (_: Request, res: Response) => {
	res.render('index')
}

export default showsController
