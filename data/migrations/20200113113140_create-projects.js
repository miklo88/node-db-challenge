exports.up = async knex => {
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table
      .text("name")
      .unique()
      .notNullable();
    table.text("description").notNullable();
    table.boolean("completed").defaultTo("false");
  });

  await knex.schema.createTable("resources", table => {
    table.increments("id");
    //   foreign key
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.text("description").notNullable();
    table.text("notes").notNullable();
    table.boolean("completed").defaultTo("false");
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.string("task_description");
    table.string("notes");
    table
      .boolean("completed")
      .defaultTo(false)
      .notNullable();
  });

  await knex.schema.createTable("projects_tasks", table => {
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");
    table
      .integer("task_id")
      .notNullable()
      .references("id")
      .inTable("task");
    table.primary(["project_id", "task_id"]);
  });
};

exports.down = async knex => {
  await knex.schema
    .dropTableIfExists("projects_tasks")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
