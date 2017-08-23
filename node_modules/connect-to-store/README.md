# connect-to-store

This decorator simplifies connecting to the Redux store, in particular if a top-level store value is to be mapped to a property of the same name.

### Basic usage
```js
// passes store.get('foo') as prop 'foo' to the wrapped component (likewise with 'bar')
@connectToStore('foo', 'bar')
class MyComponent extends React.Component {
    static propTypes = {
        foo: React.PropTypes.array,
        bar: React.PropTypes.object
    }
}
```

Additionally, a static `getPropsFromStore` function can be specified to allow for more fine-grained control:
```js
@connectToStore()  // note the parens
class MyComponent {
    static getPropsFromStore(store) {
        return {
            bamBaz: store.getIn(['bam', 'baz'])
        };
    }

    static propTypes = {
        bamBaz: React.PropTypes.object
    }
}
````

If a key (i.e., prop name) appears in both the decorator parameters and the object returned from the static method,
the value of the latter overwrites the former.


### Notes

If you use Babel 6 you need the [`babel-plugin-transform-decorators-legacy`](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin to add support for decorators.

In order to use the class properties syntax like in the examples you must enable the [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) transform (e.g., via using the [stage-1](https://www.npmjs.com/package/babel-preset-stage-1) preset).