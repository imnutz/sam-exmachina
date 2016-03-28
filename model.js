var model = {
    atHome: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    noSidebar: false
};

var _state;

function bindState(state) {
    _state = state;
}

function present(data) {
    data = data || {};

    model.hasLeftSidebar = Boolean(data.enabledLeftSidebar);
    model.hasRightSidebar = Boolean(data.enabledRightSidebar);
    model.atHome = Boolean(data.atHome);
    model.noSidebar = Boolean(data.noSidebar);

    _state.render(model);
}

function init() {
    return {
        atHome: true,
        hasLeftSidebar: false,
        hasRightSidebar: false,
        noSide: false
    };
}

module.exports = {
    bindState: bindState,
    init: init,
    present: present
};
