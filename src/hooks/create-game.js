// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const defaults = {};
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  options = Object.assign({}, defaults, options);
  return function (hook) {

    const currentUser = hook.params.user;

    hook.data.title = `${currentUser.name}'s Game`;

    hook.data.playerIds = [hook.params.user._id];

    return Promise.resolve(hook);
  };
};
