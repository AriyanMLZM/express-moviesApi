import { Response, Request } from 'express'

const apiFindController = async (req: Request, res: Response) => {
	const { name, year, type } = req.body
	try {
		const response = await fetch(
			`${process.env.OMDB_URL}&t=${name}&type=${type}&y=${year}`
		)
		const data = await response.json()
		if (data.Response === 'False') {
			res.status(404).send({ msg: 'not found!' })
		} else if (data.Response === 'True') {
			res.status(200).send({ poster: data.Poster, year: data.Year })
		} else {
			res.status(500).send({ msg: 'Something wrong with omdb response!' })
		}
	} catch (error) {
		res.status(500).send({ msg: "Server error can't access omdb!" })
	}
}

export default apiFindController
