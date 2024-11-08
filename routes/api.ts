import { Router } from 'express'

import { apiCreateController, apiUpdateController, apiFindController } from '../controllers'

const router = Router()

router.post('/create', apiCreateController)
router.put('/update', apiUpdateController)
router.post('/find', apiFindController)

export default router
