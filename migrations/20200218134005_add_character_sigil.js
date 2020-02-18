
exports.up = function(knex) {
    return knex.schema.table('characters', table => {
        table.string('sigil', 128)
    })
};

exports.down = function(knex) {
    return knex.schema.table('characters', table => {
        table.dropColumn('sigil')
    })
};
