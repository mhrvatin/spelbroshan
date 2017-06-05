const FS = require('fs');
const PATH = require('path');
const RULES_PATH = '../../rules';

function getAllGames() {
  let dir = PATH.join(__dirname, RULES_PATH);

  return FS.readdirSync(dir, 'utf8');
}

module.exports = getAllGames;