function addChildren(parentNode, nodesArray) {
    // adds to parent nodes properties all the children
    return parentNode;
}
function addStyling(node, stylesObj) {
    // applies styling to the node
    node.__stylesChanged = true;
    return node;
}
function addListeners(node, listenersObj) {
    // change to adding of an attribute and global re-render later
    node.__listeners = listenersObj;
    node.__listenersChanged = true;
    return node;
}
function addAttributes(node, attributesObj) {
    node.__attributesChanged = true;
    return node;
}

function addText(node, text) {
    node.innerText = text;
    node.__innerTextChanged = true;
    return node;
}

function addNode(node, parentNode) {
    // to be changed to manual adding to the nodes attributes as to an object, with global re-render afterall
    parentNode.appendChild(node);
    return parentNode;
}
