var model = {
    initialize: true,
    atHome: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    noSidebar: false,

    marketings: []
};

var _state;

function bindState(state) {
    _state = state;
}

function present(data) {
    data = data || {};

    model.initialize = Boolean(data.initialize);
    model.hasLeftSidebar = Boolean(data.enabledLeftSidebar);
    model.hasRightSidebar = Boolean(data.enabledRightSidebar);
    model.atHome = Boolean(data.atHome);
    model.noSidebar = Boolean(data.noSidebar);

    model.marketings = data.marketings;

    _state.render(model);
}

function init() {
    return {
        initialize: true,
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
