"use strict";
const mongoose = require("mongoose");
const db = require("this.db");
const fs = require("fs");
class MongoClient {
  /**
   * @name MongoClient
   * @kind constructor
   * @param {Object} options The options
   * @param {Object} [options.schema] The shcema options
   * @param {String} [options.schema.name] The name of the data schema
   * @param {String} options.mongoURI The mongo connection URI
   * @param {String} [options.logFile] The path to your log file
   * @description Create a MongoClient
   * @class
   */
  constructor(options) {
    mongoose.connect(options.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    db.saveData("LOG_FILE", options.logFile, ":LOG_FILE:");
    db.saveData(
      "client",
      {
        Schemas: {
          DEFAULT: mongoose.model(
            options
              ? options.schema
                ? options.schema.name
                  ? options.schema.name
                  : "Data"
                : "Data"
              : "Data",
            new mongoose.Schema({
              Key: String,
              Value: mongoose.SchemaTypes.Mixed,
              Active: Boolean,
              Exist: Boolean,
            })
          ),
        },
      },
      ":client:"
    );
  }
  /**
   * @method
   * @param {String} key The key, so you can get it with <MongoClient>.get("key")
   * @param {*} value The value which will be saved to the key
   * @param {String} [schema] The schema you want to save it to, default is Data
   * @example
   * <MongoClient>.set("test","js is cool")
   */
  async set(key, value, schema) {
    let Data = db.getData("client", ":client:");
    Data.Schemas[schema ? schema : "DEFAULT"].findOne(
      { Key: key },
      async (err, data) => {
        if (err) {
          return console.error(err);
        }
        if (!data) {
          new Data.Schemas[schema ? schema : "DEFAULT"]({
            Key: key,
            Value: value,
            Active: true,
            Exists: true,
          }).save();
        } else if (data) {
          data.Value = value;
          data.save();
        }
      }
    );
  }
  /**
   * @method
   * @param {String} key The key you wish to get
   * @param {String} [schema] The schema you wish to look through
   * @example
   * <MongoClient>.get("test") //Will return "js is cool" (if you have set it)
   */
  async get(key, schema) {
    let Data = db.getData("client", ":client:");
    let DATA = {};
    let SCHEMA = schema ? schema : "DEFAULT";
    await Data.Schemas[SCHEMA].findOne(
      { Key: key, Active: true },
      async (err, data) => {
        if (err) console.error(err);
        if (data == null) {
          Data.Value = undefined;
        }
        if (data && data.Value != null) {
          DATA.Value = typeof data.Value;
          DATA.Value = data.Value;
        }
      }
    );
    return DATA.Value;
  }
  /**
   * @method
   * @param {String} key The key you wish to check.
   * @param {String} [schema] The schema, defaults to "DEFAULT"
   */
  async has(key, schema) {
    let Data = db.getData("client", ":client:");
    return !!(await this.get(key, schema));
  }
  /**
   * @method
   * @param {String} key They key you wish to delete
   * @param {String} [schema] The schema you want to look through.
   */
  async delete(key, schema) {
    let Data = db.getData("client", ":client:");
    let SCHEMA = schema ? schema : "DEFAULT";
    Data.Schemas[SCHEMA].deleteOne({ Key: key }, async (err) => {
      if (err) {
        return console.error(err);
      } else {
      }
    });
  }
  /**
   * @method
   * @param {String} name Name of the schema.
   */
  async addSchema(name) {
    let Data = db.getData("client", ":client:");
    Data.Schemas[name] = mongoose.model(
      name,
      new mongoose.Schema({
        Key: String,
        Value: mongoose.SchemaTypes.Mixed,
        Active: Boolean,
        Exist: Boolean,
      })
    );
  }
  get schemas() {
    return db.getData("client", ":client:").Schemas;
  }
}
/*
Export it so you can use it like so:
const { MongoClient } = require("./lib/mongodb/")
Note other imports may be required for the path.
*/
module.exports = MongoClient;
