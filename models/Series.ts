import { Schema, model } from 'mongoose'

const seriesSchema = new Schema({
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
	seasons: {
		type: String,
		required: true,
	},
})

const Series = model('serie', seriesSchema)

export default Series
