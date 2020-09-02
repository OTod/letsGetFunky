const domStatesArray = []; // rewrite in more secure way

function storeDomDeepCopy(mainNodeDeepCopy) {
    domStatesArray.push(mainNodeDeepCopy);
}

function getLatestState() {
    return domStatesArray[domStatesArray.length - 1];
}

function storeCurrentState() {
    // Yet it does not fulfill only one purpose, as it should. not the functional way
    const mainNode = document.getElementById('main_container');
    storeDomDeepCopy(document.importNode(mainNode, true));
}

function detectStateChanges() {}

function isNodeStateChanged(node) {
    return (
        node.__listenersChanged ||
        node.__stylesChanged ||
        node.__innerTextChanged ||
        node.__attributesChanged
    );
}
