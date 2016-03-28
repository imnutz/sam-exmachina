var _model;

function bindModel(model) {
    _model = model;
}

function toggleLeftSidebar() {
    var data = {};

    data.enabledLeftSidebar = true;

    _model.present(data);
}

function toggleRightSidebar() {
    var data = {};

    data.enabledRightSidebar = true;

    _model.present(data);
}

function disableSidebar() {
    var data = {};

    data.enabledLeftSidebar = false;
    data.enabledRightSidebar = false;

    _model.present(data);
}

module.exports = {
    bindModel: bindModel,
    toggleLeftSidebar: toggleLeftSidebar,
    toggleRightSidebar: toggleRightSidebar,
    disableSidebar: disableSidebar
}