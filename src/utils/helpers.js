import { FiltersToQueryMapping } from '../constants/index'
export const getQueryString = (query={}) => {
    return '&' +Object.keys(query).map(key => `${FiltersToQueryMapping[key]}=${query[key]}`).join('&')
}