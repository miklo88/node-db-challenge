exports.seed = async knex => {
  await knex("Tasks").insert([
    {
      description: "task description text one",
      notes: "notes on the task at hand",
      project_Id: 1
    },
    {
      description: "task description text two",
      notes: "notes on the task at hand",
      project_Id: 2
    },
    {
      description: "task description text three",
      notes: "notes on the task at hand",
      project_Id: 3
    }
  ]);
};
