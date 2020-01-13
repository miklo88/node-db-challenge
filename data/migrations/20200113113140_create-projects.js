exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("id");
      table
        .text("name", 100)
        .unique()
        .notNullable();
      table.text("description").notNullable();
      table.boolean("completed").defaultTo("false");
    })

    .createTable("actions", table => {
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
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
