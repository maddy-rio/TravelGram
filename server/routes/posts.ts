import express from 'express'
import { getLocations } from '../db/dbFunctions'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const locations = await getLocations()
    res.json(locations)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
