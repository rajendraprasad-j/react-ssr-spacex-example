import { FiltersToQueryMapping } from '../constants/index'
export const getQueryString = (query={}) => {
    return '&' +Object.keys(query).map(key => `${FiltersToQueryMapping[key]}=${query[key]}`).join('&')
}

export const getProp = ( object, keys, defaultVal) =>{
    keys = Array.isArray( keys )? keys : keys.split('.');
    object = object[keys[0]];
    if (object && keys.length > 1) {
        return getProp(object, keys.slice(1));
    }
    return object === undefined ? defaultVal : object;
}