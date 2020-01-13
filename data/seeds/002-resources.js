exports.seed = async knex => {
  await knex("Resources").insert([
    {
      name: "Resource One",
      description: "resource description text one"
    },
    {
      name: "Resource Two",
      description: "resource description text two"
    },
    {
      name: "Resource Three",
      description: "resource description text three"
    }
  ]);
};
