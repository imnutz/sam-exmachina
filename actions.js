var services = require("./services");

var _model;

function bindModel(model) {
    _model = model;
}

function showLeftSidebar() {
    var data = {};

    data.enabledLeftSidebar = true;
    data.enabledRightSidebar = false;
    data.atHome = false;
    data.noSidebar = false;

    _model.present(data);
}

function showRightSidebar() {
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

    services
        .getMarketingData()
        .then(function(response) {
            data.initialize = false;
            data.atHome = true;
            data.noSidebar = false;
            data.marketings = response;

            _model.present(data);
        });
}

module.exports = {
    bindModel: bindModel,
    showLeftSidebar: showLeftSidebar,
    showRightSidebar: showRightSidebar,
    disableSidebar: disableSidebar,
    showHome: showHome
};
