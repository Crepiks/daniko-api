import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('services_workers', (table) => {
    table.increments('id');
    table.integer('serviceId').unsigned().notNullable();
    table.foreign('serviceId').references('services.id').onDelete('CASCADE');
    table.integer('workerId').unsigned().notNullable();
    table.foreign('workerId').references('workers.id').onDelete('CASCADE');
    table.unique(['serviceId', 'workerId']);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('services_workers');
}
