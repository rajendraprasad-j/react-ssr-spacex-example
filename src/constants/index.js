
export const FILTERS = {
    LAUNCH_SUCCESS: 'launchSuccess' ,
    LAND_SUCCESSS: 'landSuccess',
    LAUNCH_YEAR: 'launch_year'
}

export const FiltersToQueryMapping = {
    [FILTERS.LAUNCH_SUCCESS]: 'launch_success',
    [FILTERS.LAND_SUCCESSS]: 'land_success',
    [FILTERS.LAUNCH_YEAR]: 'launch_year'
}

export const INITIAL_FILTER = { [FILTERS.LAND_SUCCESSS] : 'true'};
export const FILTER_YEARS = new Array(15).fill(0).map((i, count) => 2006 + count)
