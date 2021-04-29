import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('photos', (table) => {
    table.increments('id');
    table.integer('imageId').unsigned().notNullable();
    table.foreign('imageId').references('images.id').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('photos');
}
