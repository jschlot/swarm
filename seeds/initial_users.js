
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, email: 'jack.schlotthauer@gmail.com', created_at: new Date()},
        {id: 2, email: 'jackdurango@hotmail.com', created_at: new Date()}
      ]);
    });
};
