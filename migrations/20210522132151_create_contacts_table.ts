import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id');
    table.string('phone', 255).nullable();
    table.string('email', 255).nullable();
    table.string('postIndex', 255).nullable();
    table.string('address', 255).nullable();
    table.double('lat').nullable();
    table.double('lon').nullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('contacts');
}
