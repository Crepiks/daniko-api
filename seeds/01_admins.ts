import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('admins').del();

  await knex('admins').insert([
    {
      id: 1,
      firstName: 'Sayazhan',
      lastName: 'Onglassyn',
      email: 'sayazhan.onlassyn@mail.ru',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Azat',
      lastName: 'Kazhimukhan',
      email: 'azatuk2005@mail.ru',
      password: 'password',
    },
  ]);
}
