import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('workers').del();

  await knex('workers').insert([
    {
      id: 1,
      firstName: 'Алия',
      lastName: 'Галиева',
      branch: 'Терапевт',
      description:
        'Занимается полным терапевтическим лечением. Заведует дневным стационаром.',
      scheduleId: 1,
      imageId: 1,
    },
    {
      id: 2,
      firstName: 'Газиз',
      lastName: 'Курманов',
      branch: 'Хирург',
      description: 'Проводит сосудистые операции.',
      scheduleId: 2,
      imageId: 2,
    },
    {
      id: 3,
      firstName: 'Жусуп',
      lastName: 'Тураров',
      branch: 'Невропатолог',
      description: 'Консультирует и занимается медикаментозным лечением.',
      scheduleId: 3,
      imageId: 3,
    },
  ]);
}
