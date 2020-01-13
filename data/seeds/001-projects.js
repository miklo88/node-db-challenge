exports.seed = async knex => {
  await knex("Projects").insert([
    { name: "Project One", description: "description text" },
    { name: "Project Two", description: "description text" }
  ]);
};
