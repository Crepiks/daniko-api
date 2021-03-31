import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('services', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.text('description').nullable();
    table.integer('scheduleId').unsigned().unique().nullable();
    table.foreign('scheduleId').references('schedules.id').onDelete('SET NULL');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('services');
}
