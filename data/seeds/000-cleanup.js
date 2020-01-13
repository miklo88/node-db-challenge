exports.seed = async knex => {
  await knex("Projects_Resources").truncate();
  await knex("Tasks").truncate();
  await knex("Resources").truncate();
  await knex("Projects").truncate();
};
