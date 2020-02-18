// describes the changes => knex migrate:latest
exports.up = function(knex) {
    // MUST RETURN
    return knex.schema.createTable('characters', table => {
        // Adds an id column that auto-increments
        table.increments(); // primary key

        table.string('name', 256)
            .notNullable()
            .index() // makes searching by name faster

        table.string('house', 128);

        table.string('origin', 256);

        // Booleans are normally stored as 1 for true 0 for false
        table.boolean('alive').defaultTo(true)
    })
};
// how to undo the changes => knex migrate:rollback
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters')
};
