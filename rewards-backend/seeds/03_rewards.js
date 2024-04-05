/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  const tableName = 'rewards';
  await knex(tableName).insert([
    {
      id: 1,
      name: 'Free Coffee',
      description: 'Redeem this reward for a free cup of coffee.',
      points_required: 50,
      active: true,
    },
    {
      id: 2,
      name: 'Discount Coupon',
      description: 'Get a 20% discount on your next purchase.',
      points_required: 100,
      active: true,
    },
    {
      id: 3,
      name: 'Movie Ticket',
      description: 'Redeem this reward for a free movie ticket.',
      points_required: 150,
      active: true,
    },
    {
      id: 4,
      name: 'Amazon Gift Card',
      description: 'Get a $10 Amazon gift card.',
      points_required: 200,
      active: true,
    },
  ]);
};
