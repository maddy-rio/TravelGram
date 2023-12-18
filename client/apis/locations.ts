import request from 'superagent'
import type { Location } from '../../models/location'

export async function getLocations(): Promise<Location[]> {
  const response = await request
    .get('/api/v1/locations')
  return response.body
}

export async function addPost(post: Location): Promise<Location> {
  const response = await request
    .post('/api/v1/addPost')
    .send(post)
  return response.body
}