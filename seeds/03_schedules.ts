import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('schedules').del();

  await knex('schedules').insert([
    {
      id: 1,
      monday: '10.00:14.00',
      tuesday: '10.00:16.00',
      wednesday: '10.00:14.00',
      thursday: '10.00:17.00',
      friday: '10.00:20.00',
      saturday: null,
      sunday: null,
    },
  ]);
}
