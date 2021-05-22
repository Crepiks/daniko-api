import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('images').del();

  await knex('images').insert([
    { id: 1, path: 'worker-image-1.jpg' },
    { id: 2, path: 'worker-image-2.jpg' },
    { id: 3, path: 'worker-image-3.jpg' },
    { id: 4, path: 'service-image-1.jpg' },
    { id: 5, path: 'service-image-2.jpg' },
    { id: 6, path: 'service-image-3.jpg' },
  ]);
}
