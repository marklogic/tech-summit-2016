'use strict';
function redactArrayElement(node, options) {
  let newNode = node.toObject();
  let hobbies = node.toObject().hobbies;
  if (hobbies.includes('waterpolo')) {
    let index = hobbies.indexOf('waterpolo');
    newNode.hobbies[index] = 'x'.repeat(hobbies[index].length);
    return xdmp.toJSON(newNode).root;
  } else {
    return node;
  }
};

module.exports = {
  redact: redactArrayElement
};