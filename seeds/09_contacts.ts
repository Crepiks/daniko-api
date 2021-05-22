import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('contacts').del();

  await knex('contacts').insert([{ id: 1 }]);
}
