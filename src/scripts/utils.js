function addChildren(parentNode, nodesArray) {
    // adds to parent nodes properties all the children
    return parentNode;
}
function addStyling(node, stylesObj) {
    // applies styling to the node
    return node;
}
function addListeners(node, listenersObj) {
    // change to adding of an attribute and global re-render later
    for (let listener in listenersObj) {
        node.addEventListener(listener, listenersObj[listener]);
    }
    return node;
}
function addAttributes(node, attributesObj) {
    return node;
}

function addText(node, text) {
    node.innerText = text;
    return node;
}

function addNode(node, parentNode) {
    // to be changed to manual adding to the nodes attributes as to an object, with global re-render afterall
    debugger;
    parentNode.appendChild(node);
    return parentNode;
}
