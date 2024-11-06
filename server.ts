import express from 'express'

import { homeRouter, apiRouter } from './routes'

const app = express()

const port = 4000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', homeRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`Server says Hi from ${port}.`))
