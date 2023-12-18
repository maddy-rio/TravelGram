import knex from 'knex'
import config from '../db/knexfile'
 import { Location } from '../../models/location'

const db = knex(config.development)

export function getLocations() {
  return db('locations').select('*')
}

export function addPost(post: Location) {
  return db('locations').insert(post).returning('*')
}
