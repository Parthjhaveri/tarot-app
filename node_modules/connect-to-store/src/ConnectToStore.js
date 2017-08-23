import { connect } from 'react-redux';

export default function connectToStore(...keys) {
    return function (Component) {
        if ('getPropsFromStore' in Component && typeof Component.getPropsFromStore !== 'function') {
            throw new Error(`Component's static property "getPropsFromStore" is not a function`);
        }

        return connect(function (store) {
            const propsFromFn = Component.getPropsFromStore ? Component.getPropsFromStore(store) : {};
            const propsFromKeys = keys.reduce(function (result, key) {
                result[key] = store.get(key);
                return result;
            }, {});

            return Object.assign(propsFromKeys, propsFromFn);
        })(Component);
    };
}