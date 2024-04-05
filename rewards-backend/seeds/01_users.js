/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  const tableName = 'users';
  await knex('accounts').del();
  await knex('redemptions').del();
  await knex('rewards').del();
  await knex(tableName).del();
  await knex(tableName).insert([
    {
      id: 1, first_name: 'Admin', last_name: 'Gonzales', email: 'admin@gmail.com', age: 30,
    },
    {
      id: 2, first_name: 'User', last_name: 'Gonzales', email: 'user@gmail.com', age: 30,
    },
    {
      id: 3, first_name: 'Franco', last_name: 'Mischuk', email: 'franco@gmail.com', age: 30,
    },
  ]);
};
