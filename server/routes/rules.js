const EXPRESS = require('express');
const FS = require('fs');
const PATH = require('path');

const ROUTER = EXPRESS.Router();
const RULES_PATH = '../../rules';

ROUTER.get('/:game', (req, res) => {
  let rule = getRule(req.params.game);

  res.send(rule);
});

ROUTER.get('/', (req, res) => {
  let allGames = getAllGames();

  res.send(allGames);
});

function getAllGames() {
  let dir = PATH.join(__dirname, RULES_PATH);

  return FS.readdirSync(dir, 'utf8');
}

function getRule(gameName) {
  let filePath = PATH.join(__dirname, RULES_PATH + '/' + gameName);

  return FS.readFileSync(filePath, 'utf8');
}

module.exports = ROUTER;