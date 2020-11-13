const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const {
  transformTryInvokeOnMemberExpression,
  transformStandAloneEmberTryInvoke,
} = require('./utils.js');

const TRYINVOKE = 'tryInvoke';

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const output = j(file.source);
  const options = getOptions();
  let emberUtilsImports;

  output
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        property: {
          type: 'Identifier',
          name: TRYINVOKE,
        },
      },
    })
    .replaceWith((path) => transformTryInvokeOnMemberExpression(path, j, options));

  output
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: TRYINVOKE,
      },
    })
    .replaceWith((path) => transformStandAloneEmberTryInvoke(path, j, options));

  emberUtilsImports = output.find(j.ImportDeclaration, {
    source: {
      type: 'StringLiteral',
      value: '@ember/utils',
    },
  });

  emberUtilsImports.find(j.ImportSpecifier).forEach((nodePath) => {
    if (nodePath.node.imported.name === TRYINVOKE) {
      j(nodePath).remove();
    }
  });

  if (emberUtilsImports.find(j.ImportSpecifier).length === 0) {
    emberUtilsImports.remove();
  }

  return output.toSource();
};