import { Router } from 'express'

import { moviesController } from '../controllers'

const router = Router()

router.get('/', moviesController)

export default router
