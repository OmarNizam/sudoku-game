const { authenticate } = require('feathers-authentication').hooks;

const createGame = require('../../hooks/create-game');

const joinGame = require('../../hooks/join-game');

const checkWinner = require('../../hooks/check-winner');

const populatePlayers = require('../../hooks/populate-players');

const gameStats = require('../../hooks/game-stats');


const changeValue = require('../../hooks/change-value');


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame(), checkWinner(), changeValue()],
    patch: [joinGame(), checkWinner(), changeValue()],
    remove: []
  },

  after: {
    all: [populatePlayers(), gameStats()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
