import { Router } from 'express'

import { apiCreateController } from '../controllers'

const router = Router()

router.post('/create', apiCreateController)

export default router
