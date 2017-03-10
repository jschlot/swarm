exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function (table) {
            table.increments('id');
            table.timestamps();
            table.string('email').unique();
            table.string('password_hash');
            table.string('password_reset_sha512', 128).unique();
            table.timestamp('password_reset_expiration');
        })
    ]);
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
