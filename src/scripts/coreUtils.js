function render() {
    clearDom();
    // document.documentElement.appendChild(getLatestState());

    renderStateWise();
    storeCurrentState();
    debugger;
}

function createNode(tagName) {
    let node = document.createElement(tagName);
    // let __childNodes = null;
    // let __styling = null;
    // let __listeners = null;
    // let __attributes = null;
    // let __innerText = null;

    // return Object.assign(node, {
    //     __props: {
    //         __childNodes,
    //         __styling,
    //         __listeners,
    //         __attributes,
    //         __innerText,
    //     },
    // });
    return node;
}

function getMainNode() {
    // seems bullshit. refactor. why getMainNode returns latestState? confusing
    return getLatestState();
}

function clearDom() {
    document.documentElement.childNodes = undefined;
}

function getNode(nodeCssSelector) {
    return getLatestState().querySelector(nodeCssSelector);
}

function applyListeners(node) {
    if (node.__listeners) {
        for (let listener in node.__listeners) {
            node.addEventListener(listener, node.__listeners[listener]);
            return node;
        }
    }
}

function applyRecursively(node, applyCallback) {
    if (node.childNodes && node.childNodes.length) {
        node.childNodes.forEach(childNode => {
            applyRecursively(childNode, applyCallback);
        });
    }
    return applyCallback(node);
}

function renderStateWise() {
    // function should check latest state, compare it with previous state,
    // find changed DOM nodes, and recursively apply changes to them, remove
    // old ones from DOM and put there new ones.

    // here should be used applyListeners for them to be applied

    const stateNode = getLatestState();
    applyRecursively(stateNode, node => {
        if (isNodeStateChanged(node)) {
            renderNode(node);
        }
    });

    document.documentElement.appendChild(stateNode);
}

function renderNode(node) {
    applyListeners(node);
    // 1. remove node that changed from dom
    // 2. append new node insted, with all styling/listeners/etc applied
    // how to realize: -  searching the node would be easier having the link on it;
    //                 -  adding id or other attribute as a marker, holging them in symbols for security. At node creation, it should receive unique marker then

    // remove preciselly this node from the DOM, get node from the current
    // state, apply all changed elements to it, put it in the same place
}
