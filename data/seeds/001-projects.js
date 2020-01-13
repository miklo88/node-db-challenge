exports.seed = async knex => {
  await knex("Projects").insert([
    {
      name: "Project One",
      description: "description text one"
    },
    {
      name: "Project Two",
      description: "description text two"
    },
    {
      name: "Project Three",
      description: "description text three"
    }
  ]);
};
