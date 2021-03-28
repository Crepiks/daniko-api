import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('workers', (table) => {
    table.increments('id');
    table.string('firstName', 255).notNullable();
    table.string('lastName', 255).notNullable();
    table.string('branch', 255).nullable();
    table.text('description');
    table.integer('imageId').unsigned().nullable();
    table.foreign('imageId').references('images.id').onDelete('SET NULL');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('workers');
}
