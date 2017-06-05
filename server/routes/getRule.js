const FS = require('fs');
const PATH = require('path');
const RULES_PATH = '../../rules';

function getRule(gameName) {
  let filePath = PATH.join(__dirname, RULES_PATH + '/' + gameName);

  return FS.readFileSync(filePath, 'utf8');
}

module.exports = getRule;