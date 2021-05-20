import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('service_images').del();

  await knex('service_images').insert([
    { id: 1, serviceId: 1, imageId: 4 },
    { id: 2, serviceId: 2, imageId: 5 },
    { id: 3, serviceId: 3, imageId: 6 },
  ]);
}
