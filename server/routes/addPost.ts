import express from 'express'
import { addPost } from '../db/dbFunctions'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const img = req.file?.filename
    console.log(img)
    const newPost = { ...req.body, img: img }
    console.log(newPost)
    const addedPost = await addPost(newPost)
    res.json(addedPost)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
export default router
