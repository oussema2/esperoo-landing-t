"use strict";

const tableName = "temoignages";

exports.up = async function (knex) {
  return knex.schema.alterTable(tableName, function (table) {
    table.text("content").alter();
  });
};

exports.down = async function (knex) {
  return knex.schema.alterTable(tableName, function (table) {
    table.json("content").alter();
  });
};
