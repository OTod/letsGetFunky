// input - parent node, output - parentNode with createdChildNode

function main() {
    storeCurrentState();
    console.log('Hello world');

    const main = getLatestState();
    const button = createNode('button');
    const buttonWithAttributes = addAttributes(button, {});
    const buttonWithStyling = addStyling(buttonWithAttributes, {});
    const buttonWithText = addText(buttonWithStyling, 'pressMe');
    const buttonWithListeners = addListeners(buttonWithText, {
        click: function() {
            console.log('click');
        },
    });

    addNode(buttonWithListeners, getMainNode());

    // addNode(
    //     addListeners(
    //         addText(
    //             addStyling(addAttributes(createNode('button'), {}), {}),
    //             'pressMe'
    //         ),
    //         {
    //             click: function() {
    //                 console.log('click');
    //             },
    //         }
    //     ),
    //     getMainNode()
    // );

    render();
}

///

// global function that gets whole state - the main node with all info about the all children etc, compares it with the previous state of the whole node, and renders it.

// for state - we get the hole copy of the whole DOM. We search needed element along this copy only. We make changes to it. We render the whole new dom with the last state we achieved.

document.addEventListener('DOMContentLoaded', main);
