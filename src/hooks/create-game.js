// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const sudoku = require('../utils/sudoku');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  return function (hook) {

    const { user } = hook.params;

    if (!hook.data) {
      hook.data = {
        difficulty: 'medium'
      };
    }

    // assign the owner of the game
    hook.data.userId = user._id,
    // add the owner to the players, as the first player in the game
    hook.data.players = [{
      userId: user._id,
      pairs: []
    }];

    hook.data.cells = sudoku.createGame(hook.data.difficulty);

    return Promise.resolve(hook);
  };
};
