import { Response, Request } from 'express'
import { Series } from '../models'

const showsController = async (_: Request, res: Response) => {
	const series = await Series.find()
	res.render('series', { series })
}

export default showsController
