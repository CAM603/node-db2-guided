
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').truncate() // Empty tabel and resets id back to 1
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
// knex seed:run will add seeds