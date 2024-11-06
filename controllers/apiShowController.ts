import { Response, Request } from 'express'

const apiShowController = (_: Request, res: Response) => {
	res.render('index')
}

export default apiShowController
