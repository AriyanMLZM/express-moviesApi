import express from 'express'

import home from './routes/home'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./views'))

app.use('/', home)

app.listen(4000, () => console.log('Server says Hi.'))
