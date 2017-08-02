const { authenticate } = require('feathers-authentication').hooks;

const createGame = require('../../hooks/create-game');

const joinGame = require('../../hooks/join-game');

const checkWinner = require('../../hooks/check-winner');

const populatePlayers = require('../../hooks/populate-players');

const gameStats = require('../../hooks/game-stats');

const errors = require('../../hooks/errors');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame(), checkWinner(), errors()],
    patch: [joinGame(), checkWinner(), errors()],
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
