'use strict';
function redactArrayElement(node, options) {
  let arrayElementText = node.valueOf();
  if (arrayElementText === 'waterpolo') {
    let newArrayElementText = 'x'.repeat(arrayElementText.length);
    return xdmp.toJSON(newArrayElementText).root;
  } else {
    return node;
  }
};

module.exports = {
  redact: redactArrayElement
};