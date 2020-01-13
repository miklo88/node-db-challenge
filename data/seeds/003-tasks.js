exports.seed = async knex => {
  await knex("Tasks").insert([
    {
      name: "Task One",
      description: "task description text one",
      notes: "notes on the task at hand"
    },
    {
      name: "Task Two",
      description: "task description text two",
      notes: "notes on the task at hand"
    },
    {
      name: "Task Three",
      description: "task description text three",
      notes: "notes on the task at hand"
    }
  ]);
};
