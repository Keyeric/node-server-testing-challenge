exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("stuff")
    .truncate()
    .then(function () {
      return knex("stuff").insert([
        { name: "sam" },
        { name: "frodo" },
        { name: "pippin" },
        { name: "merry" },
      ]);
    });
};
