const nodeNotifier = require('node-notifier');

module.exports.notify = (title, message) => {
  nodeNotifier.notify({
    title,
    message,
    // sound: true,
    sound: 'Purr',
    timeout: -1
  });
};
