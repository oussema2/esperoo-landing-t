"use strict";

const tableName = "video_formations";

exports.up = async function (knex) {
  return knex.schema.alterTable(tableName, function (table) {
    table.text("video_url").alter();
  });
};

exports.down = async function (knex) {
  return knex.schema.alterTable(tableName, function (table) {
    table.json("video_url").alter();
  });
};
