import { Response, Request } from 'express'
import { Movies, Series } from '../models'

const apiFindController = async (req: Request, res: Response) => {
	const { name, year, type } = req.body
	const response = await fetch(
		`${process.env.OMDB_URL}&t=${name}&type=${type}&y=${year}`
	)
	const data = await response.json()
	if (data.Response === 'False') {
		res.status(404).send({ msg: 'not found!' })
	} else if (data.Response === 'True') {
		res.status(200).send({ poster: data.Poster, year: data.Year })
	} else {
		res.status(500).send({ msg: 'Unable to access Server!' })
	}
}

export default apiFindController
