
export async function up(knex) {
  await knex.schema.createTable('locations', (table) => {
    table.increments('id').primary()
    // table.string('nickname')
    table.string('img')
    table.string('location')
    table.string('rating')
    table.string('description')
  })
}


export async function down(knex) {
  await knex.schema.dropTable('locations')
}
