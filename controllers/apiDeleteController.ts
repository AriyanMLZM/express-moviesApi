import { Response, Request } from 'express'
import { Movies, Series } from '../models'

const apiDeleteController = async (req: Request, res: Response) => {
	const { type } = req.body
	switch (type) {
		case 'movie':
			await Movies.deleteOne({ _id: req.params.id })
			break
		case 'series':
			await Series.deleteOne({ _id: req.params.id })
	}
	res.json({ msg: `Deleted successfully.` })
}

export default apiDeleteController
