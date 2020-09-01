const domStatesArray = [];

function addDomState(mainNodeDeepCopy) {
    domStatesArray.push(mainNodeDeepCopy);
}

function getLatestState() {
    return domStatesArray[domStatesArray.length - 1];
}

function getNodeCopy(nodeId) {
    // Yet it does not fulfill only one purpose, as it should. not the functional way
    const node = document.getElementById(nodeId);
    addDomState(document.importNode(node, true));
    return getLatestState();
}
