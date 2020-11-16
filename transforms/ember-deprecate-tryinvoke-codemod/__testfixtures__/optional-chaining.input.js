const test1 = tryInvoke(obj, 'key');
const test2 = tryInvoke(obj, 'key', ['foo']);
const test3 = tryInvoke(obj, 'key', ['foo', 1]);
const test4 = tryInvoke(obj, 'key', ['foo', 1, { bar: 'baz' }]);
const test5 = tryInvoke(obj, 'key', ['foo', 1, { bar: 'baz' }, ['array']]);
const test6 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}]);
const test7 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}, null]);
const test8 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}, null, undefined]);
const test9 = tryInvoke(obj.args, actionName, [{ foo: 'bar' }]);