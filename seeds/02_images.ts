import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('images').del();

  await knex('images').insert([
    { id: 1, path: 'worker-image.jpg' },
    { id: 2, path: 'worker-image.jpg' },
    { id: 3, path: 'worker-image.jpg' },
    { id: 4, path: 'service-image.jpg' },
    { id: 5, path: 'service-image.jpg' },
    { id: 6, path: 'service-image.jpg' },
  ]);
}
