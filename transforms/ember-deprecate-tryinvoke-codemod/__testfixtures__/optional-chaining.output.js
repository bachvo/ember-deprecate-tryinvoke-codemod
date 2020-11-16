const test1 = obj.key?.();
const test2 = obj.key?.('foo');
const test3 = obj.key?.('foo', 1);
const test4 = obj.key?.('foo', 1, { bar: 'baz' });
const test5 = obj.key?.('foo', 1, { bar: 'baz' }, ['array']);
const test6 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {});
const test7 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {}, null);
const test8 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {}, null, undefined);
const test9 = obj.args[actionName]?.({ foo: 'bar' });