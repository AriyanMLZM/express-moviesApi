import { Response, Request } from 'express'

const apiCreateController = async (req: Request, res: Response) => {
	const { name, year, type } = req.body
	const response = await fetch(
		`${process.env.OMDB_URL}&t=${name}&type=${type}&y=${year}`
	)
	const data = await response.json()

	if (data.Response === 'False') {
		res.status(404).send('Not found!')
	} else if (data.Response === 'True') {
		res.status(200).send(data)
	}
}

export default apiCreateController
