exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("id");
      table
        .text("name")
        .unique()
        .notNullable();
      table.text("description").notNullable();
      table.boolean("completed").defaultTo("false");
    })

    .createTable("resources", table => {
      table.increments("id");
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
    })

    .createTable("tasks", table => {
      table.increments("id");
      table.string("task_description");
      table.string("notes");
      table
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
