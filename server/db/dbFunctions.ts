import knex from 'knex'
import config from '../db/knexfile'
 import { Location } from '../../models/location'

const db = knex(config.development)

// Get locations
export function getLocations() {
  return db('locations').select('*')
}

// Add post
export function addPost(post: Location) {
  return db('locations').insert(post).returning('*')
}

// Get user locations
export function getUserLocations() {
  return db('locations').select('*')
}