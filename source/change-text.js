//change-title.js
'use strict';

module.exports = function (processor) {
  // This will allow to use this <!-- build:changeText[:target] <value> --> syntax
  processor.registerBlockType('changeText', function (content, block, blockLine, blockContent) {
    var title = block.asset;
    var result = content.replace(blockLine, title);

    return result;
  });
};