import { Response, Request } from 'express'
import { Movies, Series } from '../models'

const apiCreateController = async (req: Request, res: Response) => {
	const { name, year, type } = req.body
	try {
		const response = await fetch(
			`${process.env.OMDB_URL}&t=${name}&type=${type}&y=${year}`
		)
		const data = await response.json()

		if (data.Response === 'False') {
			res.status(404).send({ msg: 'Not found!' })
		} else if (data.Response === 'True') {
			try {
				switch (data.Type) {
					case 'movie':
						await Movies.create({
							title: data.Title,
							year: data.Year,
							imdb: data.imdbRating,
							poster: data.Poster,
						})
						break
					case 'series':
						await Series.create({
							title: data.Title,
							seasons: data.totalSeasons,
							imdb: data.imdbRating,
							poster: data.Poster,
							year: data.Year,
						})
						break
				}
				res.status(200).send({ msg: 'Data added to database.' })
			} catch (error) {
				res.status(500).send({ msg: 'Server error saving to database!' })
			}
		} else {
			res.status(500).send({ msg: 'Something wrong with omdb response!' })
		}
	} catch (error) {
		res.status(500).send({ msg: "Server error can't access to omdb!" })
	}
}

export default apiCreateController
