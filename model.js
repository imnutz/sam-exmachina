var model = {
    hasLeftSidebar: false,
    hasRightSidebar: false
};

var _state;

function bindState(state) {
    _state = state;
}

function present(data) {
    data = data || {};
    
    model.hasLeftSidebar = Boolean(data.enabledLeftSidebar);
    model.hasRightSidebar = Boolean(data.enabledRightSidebar);

    _state.render(model);
}

function init() {
    return {
        hasLeftSidebar: false,
        hasRightSidebar: false
    };
}

module.exports = {
    bindState: bindState,
    init: init,
    present: present
};