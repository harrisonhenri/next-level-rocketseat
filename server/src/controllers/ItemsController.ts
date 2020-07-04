import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
  async index(req: Request, res: Response): Promise<Response> {
    const items = await knex('items').select('*')

    const serializedItems = items.map(({ id, title, image }) => {
      return {
        id,
        title,
        image_url: `http://192.168.0.4:3333/uploads/${image}`,
      }
    })

    return res.json(serializedItems)
  }
}

export default new ItemsController()
