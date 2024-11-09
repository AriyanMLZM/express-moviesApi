import { Router } from 'express'

import {
	apiCreateController,
	apiUpdateController,
	apiFindController,
	apiDeleteController,
} from '../controllers'

const router = Router()

router.post('/create', apiCreateController)
router.put('/update', apiUpdateController)
router.post('/find', apiFindController)
router.delete('/delete/:id', apiDeleteController)

export default router
