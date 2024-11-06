import { Router } from 'express'

import { apiCreateController, apiUpdateController } from '../controllers'

const router = Router()

router.post('/create', apiCreateController)
router.put('/update', apiUpdateController)

export default router
