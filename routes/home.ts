import { Router } from 'express'

import { moviesController, showsController } from '../controllers'

const router = Router()

router.get('/', moviesController)
router.get('/series', showsController)

export default router
