function transformTryInvokeOnMemberExpression(path, j, options) {
  const [key, args] = path.value.arguments;
  const obj = path.value.callee.object;
  const callExpressionArgs = args ? args.elements : [];

  if (key.type === 'StringLiteral') {
    return j.memberExpression(
      obj,
      j.optionalCallExpression(j.identifier(key.value), callExpressionArgs)
    );
  }

  const node = j.memberExpression(obj, key, true);
  return j.optionalCallExpression(node, callExpressionArgs);
}

function transformStandAloneEmberTryInvoke(path, j, options) {
  const [obj, key, args] = path.value.arguments;
  const callExpressionArgs = args ? args.elements : [];

  if (key.type === 'StringLiteral') {
    return j.memberExpression(
      obj,
      j.optionalCallExpression(j.identifier(key.value), callExpressionArgs)
    );
  }

  const node = j.memberExpression(obj, key, true);
  return j.optionalCallExpression(node, callExpressionArgs);
}

module.exports = {
  transformStandAloneEmberTryInvoke,
  transformTryInvokeOnMemberExpression,
};