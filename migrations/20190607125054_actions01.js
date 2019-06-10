exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments(); //primary key

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id") //referencing id from the project
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .string("description", 128)
      .notNullable()
      .unique();

    tbl.string("notes", 255).unique();

    tbl
      .boolean("complete")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
