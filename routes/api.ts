import { Router } from 'express'

import { apiMovieController, apiShowController } from '../controllers'

const router = Router()

router.post('/createMovie', apiMovieController)
router.post('/createShow', apiShowController)

export default router
