
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'John_1', last_name:'Doe_1', email:'john_1@doe.com'},
        {id: 2, name: 'John_2', last_name:'Doe_2', email:'john_2@doe.com'},
        {id: 3, name: 'John_3', last_name:'Doe_3', email:'john_3@doe.com'}
      ]);
    });
};
