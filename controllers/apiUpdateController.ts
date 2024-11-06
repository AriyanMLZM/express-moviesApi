import { Response, Request } from 'express'
import { Movies, Series } from '../models'

const apiUpdateController = async (_: Request, res: Response) => {
	const movies = await Movies.find()
	movies.forEach(async (item) => {
		const response = await fetch(
			`${process.env.OMDB_URL}&t=${item.title}&type=movie&y=${item.year}`
		)
		const data = await response.json()
		item.title = data.Title
		item.year = data.Year
		item.imdb = data.imdbRating
		item.poster = data.Poster
		await item.save()
	})

	const series = await Series.find()
	series.forEach(async (item) => {
		const response = await fetch(
			`${process.env.OMDB_URL}&t=${item.title}&type=series&y=${item.year}`
		)
		const data = await response.json()
		item.title = data.Title
		item.seasons = data.totalSeasons
		item.imdb = data.imdbRating
		item.poster = data.Poster
		item.year = data.Years
		await item.save()
	})

	res.send('Databases were updated.')
}

export default apiUpdateController
