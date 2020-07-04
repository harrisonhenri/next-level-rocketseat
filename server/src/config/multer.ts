import multer from 'multer'
import crypto from 'crypto'
import { resolve } from 'path'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      const hash = crypto.randomBytes(6).toString('hex')

      const fileName = `${hash}-${file.originalname}`

      cb(null, fileName)
    },
  }),
}
