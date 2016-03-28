var h = require("snabbdom/h");
var theme = require("./theme");

var _actions,
    _view;

function bindActions(actions) {
    _actions = actions;
}
function bindView(view) {
    _view = view;
}

function shouldShowLeft(model) {
    return model.hasLeftSidebar;
}

function shouldShowRight(model) {
    return model.hasRightSidebar;
}

function shouldHideSidebar(model) {
    return !model.hasLeftSidebar && !model.hasRightSidebar;
}

function representation(model) {
    var mainClazz = shouldHideSidebar(model) ? "12u" : "9u";

    return h("div.app", { class: { "show-left-sidebar": shouldShowLeft(model), "show-right-sidebar": shouldShowRight(model) }} , [
        theme.header(model, _actions),
        theme.banner(model),
        theme.page(model, mainClazz),
        theme.featured(model),
        theme.footer(model),
        theme.copyright(model)
    ]);
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
