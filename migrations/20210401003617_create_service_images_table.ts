import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('service_images', (table) => {
    table.increments('id');
    table.integer('serviceId').unsigned().notNullable();
    table.foreign('serviceId').references('services.id').onDelete('CASCADE');
    table.integer('imageId').unsigned().notNullable();
    table.foreign('imageId').references('images.id').onDelete('CASCADE');
    table.unique(['serviceId', 'imageId']);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('service_images');
}
