"use strict";

const tableName = "blogs";

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
