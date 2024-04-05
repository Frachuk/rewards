/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  const tableName = 'accounts';
  await knex(tableName).insert([
    {
      id: 1, name: 'Admin', password: 'admin', credits: 1000, user_id: 1,
    },
    {
      id: 2, name: 'User', password: '1234', credits: 5000, user_id: 2,
    },
    {
      id: 3, name: 'Franco', password: '37983714', credits: 0, user_id: 3,
    },
  ]);
};
