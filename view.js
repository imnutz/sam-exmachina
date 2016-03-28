var patch = require("snabbdom").init([ // Init patch function with choosen modules
  require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/style'), // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);

var old = document.querySelector("#exmachina");

function display(representation) {
    old = patch(old, representation);
}

module.exports = {
    display: display
};