import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('schedules', (table) => {
    table.increments('id');
    table.string('monday', 255).nullable();
    table.string('tuesday', 255).nullable();
    table.string('wednesday', 255).nullable();
    table.string('thursday', 255).nullable();
    table.string('friday', 255).nullable();
    table.string('saturday', 255).nullable();
    table.string('sunday', 255).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('schedules');
}
