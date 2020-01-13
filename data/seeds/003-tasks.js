exports.seed = async knex => {
  await knex("Tasks").insert([
    {
      name: "Task One",
      description: "task description text one",
      notes: "notes on the task at hand",
      project_Id: 1
    },
    {
      name: "Task Two",
      description: "task description text two",
      notes: "notes on the task at hand",
      project_Id: 2
    },
    {
      name: "Task Three",
      description: "task description text three",
      notes: "notes on the task at hand",
      project_Id: 3
    }
  ]);
};
