import { Router } from 'express'

const router = Router()

// Get
router.get('/api/projects')
router.get('/api/project/:project')
// Post
router.post('/api/auth/register')
router.post('/api/auth/login')
router.post('/api/new-project')
router.post('/api/new-issue/:project')
router.post('/api/new-commit/:project')
// Put
router.put('/api/issue/:id')
router.put('/api/project/:id')
// Delete
router.delete('/api/project/:id')


export default router