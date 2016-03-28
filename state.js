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
    var flag = shouldShowLeft(model);
    var clazz = (shouldShowLeft(model) ? ".show-left-sidebar" :
                shouldShowRight(model) ? ".show-right-sidebar" : "");

    var mainClazz = shouldShowLeft(model) || shouldShowRight(model) ? "9u" : "12u";
    return h("div.app" + clazz , [
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