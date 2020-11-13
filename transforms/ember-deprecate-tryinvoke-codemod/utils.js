function transformTryInvokeOnMemberExpression(path, j, options) {
  const [key, args] = path.value.arguments;
  const obj = path.value.callee.object;
  const callExpressionArgs = args ? args.elements : [];

  return j.memberExpression(
    obj,
    j.optionalCallExpression(j.identifier(key.value), callExpressionArgs)
  );
}

function transformStandAloneEmberTryInvoke(path, j, options) {
  const [obj, key, args] = path.value.arguments;
  const callExpressionArgs = args ? args.elements : [];

  return j.memberExpression(
    obj,
    j.optionalCallExpression(j.identifier(key.value), callExpressionArgs)
  );
}

module.exports = {
  transformStandAloneEmberTryInvoke,
  transformTryInvokeOnMemberExpression,
};