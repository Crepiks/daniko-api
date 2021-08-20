import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('services', (table) => [
    table.integer('price').unsigned().defaultTo(0),
  ]);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('services', (table) => {
    table.dropColumn('price');
  });
}
