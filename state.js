var theme = require("./theme");

var _actions,
    _view;

function bindActions(actions) {
    _actions = actions;
}

function bindView(view) {
    _view = view;
}

function atHome(model) {
    return model.atHome;
}

function shouldShowLeft(model) {
    return model.hasLeftSidebar;
}

function shouldShowRight(model) {
    return model.hasRightSidebar;
}

function shouldHideSidebar(model) {
    return model.noSidebar;
}

function representation(model) {
    var mainClazz = shouldHideSidebar(model) ? "12u" : "9u";

    return theme.website({
        atHome: atHome(model),
        hasLeftSidebar: shouldShowLeft(model),
        hasRightSidebar: shouldShowRight(model),
        noSidebar: shouldHideSidebar(model),
        mainClazz: mainClazz,
        actions: _actions
    });
}

function render(model) {
    _view.display(representation(model));
}

module.exports = {
    bindActions: bindActions,
    bindView: bindView,
    render: render,
    representation: representation
}
