
export async function seed(knex) {
  // // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      image: 'Rarotonga.jpeg',
      location: 'Rarotonga',
      rating: '⭐️⭐️⭐️⭐️⭐️',
      description:
        'Amazing holiday for relaxing! Plenty of great activites around the island and some lovely places to eat. ',
    },
    {
      image: 'GC.jpeg',
      location: 'Gold Coast',
      rating: '⭐️⭐️⭐️⭐️',
      description:
        'Lots of fun theme parks to visit here, and the weather is amazing. Only downside is the amount of traffic and people.',
    },
    {
      image: 'Bali.jpeg',
      location: 'Bali',
      rating: '⭐️⭐️⭐️⭐️⭐️',
      description:
        'So beautiful here! The beaches are fantastic and there are so many affordable activities and places to stay. Definitely recommend!',
    },
  ])
}
