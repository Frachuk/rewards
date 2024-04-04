/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema
  .createTable('users', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.integer('age').notNullable().unsigned();
  })
  .createTable('rewards', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('name', 255).unique().notNullable();
    table.string('description', 255).notNullable();
    table.integer('points_required').notNullable().unsigned();
    table.boolean('active').notNullable().defaultTo(true);
  })
  .createTable('redemptions', (table) => {
    table.increments('id', { primaryKey: true });
    table.timestamp('date').notNullable().defaultTo(knex.fn.now());
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('reward_id').unsigned().references('id').inTable('rewards');
  })
  .createTable('accounts', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('name', 255).unique().notNullable();
    table.string('password', 255).notNullable();
    table.integer('credits').notNullable().defaultTo(0);
    table.integer('user_id').unsigned().unique().references('id')
      .inTable('users');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('redemptions').dropTable('rewards').dropTable('accounts').dropTable('users');
