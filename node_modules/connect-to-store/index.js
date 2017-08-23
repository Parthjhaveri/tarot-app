'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = connectToStore;

var _reactRedux = require('react-redux');

function connectToStore() {
    for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
    }

    return function (Component) {
        if ('getPropsFromStore' in Component && typeof Component.getPropsFromStore !== 'function') {
            throw new Error('Component\'s static property "getPropsFromStore" is not a function');
        }

        return (0, _reactRedux.connect)(function (store) {
            var propsFromFn = Component.getPropsFromStore ? Component.getPropsFromStore(store) : {};
            var propsFromKeys = keys.reduce(function (result, key) {
                result[key] = store.get(key);
                return result;
            }, {});

            return Object.assign(propsFromKeys, propsFromFn);
        })(Component);
    };
}
