import { Schema, model } from 'mongoose'

const moviesSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	poster: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	imdb: {
		type: String,
		required: true,
	},
})

const Movies = model('movie', moviesSchema)

export default Movies
