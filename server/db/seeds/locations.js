
export async function seed(knex) {
  // // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      img: 'Rarotonga.jpeg',
      location: 'Rarotonga',
      rating: '⭐️⭐️⭐️⭐️⭐️',
      description:
        'Amazing holiday for relaxing! Plenty of great activites around the island and some lovely places to eat. ',
    },
    {
      img: 'GC.jpeg',
      location: 'Gold Coast',
      rating: '⭐️⭐️⭐️⭐️',
      description:
        'Lots of fun theme parks to visit here, and the weather is amazing. Only downside is the amount of traffic and people.',
    },
  ])
}
