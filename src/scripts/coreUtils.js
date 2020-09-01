function render() {
    document.documentElement.childNodes = undefined;
    document.documentElement.appendChild(getLatestState());
}

function createNode(tagName) {
    let node = document.createElement(tagName);
    let __childNodes = {};
    let __styling = {};
    let __listeners = {};
    let __attributes = {};
    let __innerText = '';

    return Object.assign(node, {
        __childNodes,
        __styling,
        __listeners,
        __attributes,
        __innerText,
    });
}
