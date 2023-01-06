const { EventEmitter } = require("events");

const subscirers = {};

function subscribe(type, callback) {
  console.log("new subscriber for " + type);
  if (subscirers[type] == undefined) {
    subscirers[type] = [];
  }

  subscirers[type].push(callback);
}

function publish(type, ...data) {
  console.log("recived " + type);
  const currentSubscribers = subscirers[type];

  if (currentSubscribers) {
    for (let subscriber of currentSubscribers) {
      subscriber(data);
    }
  }
}

const emitters = new EventEmitter();

module.exports = {
  emitters,
};

// module.exports = {
//   subscribe,
//   publish,
// };
