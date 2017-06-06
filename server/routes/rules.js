const EXPRESS = require('express');
const GET_ALL_GAMES = require('./getAllGames');
const GET_RULE = require('./getRule');

const ROUTER = EXPRESS.Router();

ROUTER.get('/', (req, res) => {
  let allGames = GET_ALL_GAMES();

  res.send(allGames);
});

ROUTER.get('/:game', (req, res) => {
  let rule = GET_RULE(req.params.game);

  res.send(rule);
});

module.exports = ROUTER;