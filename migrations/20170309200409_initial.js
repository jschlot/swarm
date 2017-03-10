exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function (table) {
            table.increments('id');
            table.timestamps();
            table.string('email').unique();
        })
    ]);
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
