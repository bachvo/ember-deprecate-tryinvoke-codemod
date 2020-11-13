# ember-deprecate-tryinvoke-codemod


An Ember codemod to deprecate tryInvoke and replace the usage with [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). See [RFC 673 deprecate tryInvoke](https://emberjs.github.io/rfcs/0673-deprecate-tryinvoke.html)

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-deprecate-tryinvoke-codemod ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-deprecate-tryinvoke-codemod
ember-deprecate-tryinvoke-codemod ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [ember-deprecate-tryinvoke-codemod](transforms/ember-deprecate-tryinvoke-codemod/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`