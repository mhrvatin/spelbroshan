const EXPRESS = require('express');
const MYSQL = require('mysql');
const DB_CONFIG = require('../db_config');

const ROUTER = EXPRESS.Router();
const CONNECTION = MYSQL.createConnection(DB_CONFIG);

ROUTER.get('/', (req, res) => {
  getAllGames().then(function (rows) {
    res.send(rows);
  }).catch((err) => setImmediate(() => { throw err; } ));
});

function getAllGames() {
  return new Promise(function (resolve, reject) {
    CONNECTION.query('SELECT * from games', (err, rows, fields) => {
      if (err) {
        return reject(err);
      }

      resolve(rows);
    });
  });
}

module.exports = ROUTER;