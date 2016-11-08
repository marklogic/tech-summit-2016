'use strict';
function redactArrayElement(node, options) {
  if (node.valueOf() === options.arrayValue) {
    let newNode = 'x'.repeat(options.arrayValue.length);
    return xdmp.toJSON(newNode).root
  } else {
    return node;
  }
};

module.exports = {
  redact: redactArrayElement
};