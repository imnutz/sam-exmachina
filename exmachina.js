var view = require("./view");
var state = require("./state");
var model = require("./model");
var actions = require("./actions");

function wire(state, model, actions, view) {
    state.bindActions(actions);
    state.bindView(view);
    model.bindState(state);
    actions.bindModel(model);
}

wire(state, model, actions, view);
state.render(model.init());