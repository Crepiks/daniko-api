import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('services_workers').del();

  await knex('services_workers').insert([
    {
      id: 1,
      workerId: 1,
      serviceId: 3,
    },
    {
      id: 2,
      workerId: 2,
      serviceId: 1,
    },
    {
      id: 3,
      workerId: 3,
      serviceId: 2,
    },
  ]);
}
