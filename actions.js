var _model;

function bindModel(model) {
    _model = model;
}

function toggleLeftSidebar() {
    var data = {};

    data.enabledLeftSidebar = true;
    data.enabledRightSidebar = false;
    data.atHome = false;
    data.noSidebar = false;

    _model.present(data);
}

function toggleRightSidebar() {
    var data = {};

    data.enabledRightSidebar = true;
    data.enabledLeftSidebar = false;
    data.atHome = false;
    data.noSidebar = false;

    _model.present(data);
}

function disableSidebar() {
    var data = {};

    data.enabledLeftSidebar = false;
    data.enabledRightSidebar = false;
    data.atHome = false;
    data.noSidebar = true;

    _model.present(data);
}

function showHome() {
    var data = {};

    data.atHome = true;
    data.noSidebar = false;

    _model.present(data);
}

module.exports = {
    bindModel: bindModel,
    toggleLeftSidebar: toggleLeftSidebar,
    toggleRightSidebar: toggleRightSidebar,
    disableSidebar: disableSidebar,
    showHome: showHome
}
