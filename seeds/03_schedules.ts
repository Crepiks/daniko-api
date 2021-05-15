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
    {
      id: 2,
      monday: '9.00:14.00',
      tuesday: '8.00:16.00',
      wednesday: null,
      thursday: '10.00:20.00',
      friday: '10.00:20.00',
      saturday: null,
      sunday: null,
    },
    {
      id: 3,
      monday: '10.00:14.00',
      tuesday: '20.00:16.00',
      wednesday: '10.00:14.00',
      thursday: '7.00:17.00',
      friday: '10.00:20.00',
      saturday: null,
      sunday: null,
    },
  ]);
}
