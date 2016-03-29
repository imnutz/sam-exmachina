var theme = require("./theme");

var _actions,
    _view;

function bindActions(actions) {
    _actions = actions;
}

function bindView(view) {
    _view = view;
}

function onInit(model) {
    return model.initialize;
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
        actions: _actions,
        marketings: model.marketings || []
    });
}

function render(model) {
    _view.display(representation(model));
    nextAction(model);
}

function nextAction(model) {
    if(onInit(model)) {
        _actions.showHome();
    }
}

module.exports = {
    bindActions: bindActions,
    bindView: bindView,
    render: render,
    representation: representation
}
