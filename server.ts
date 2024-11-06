import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import('./configs/db')

import { homeRouter, apiRouter } from './routes'

dotenv.config()
const app = express()

const port = process.env.PORT || 4000
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

app.use('/', homeRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`Server says Hi from ${port}.`))
