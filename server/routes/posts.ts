import express from 'express'
import { getLocations, addPost, getUserLocations } from '../db/dbFunctions'

const router = express.Router()

// GET /api/v1/locations
router.get('/', async (req, res) => {
  try {
    const locations = await getLocations()
    res.json(locations)
  } catch (error) {
    res.status(500).send(error)
  }
})

// POST /api/v1/addPost
router.post('/', async (req, res) => {
  addPost(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})

// GET /api/v1/userLocations
router.get('/userLocations', async (req, res) => {
  try {
    const locations = await getUserLocations()
    res.json(locations)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
