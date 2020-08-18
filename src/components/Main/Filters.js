import React  from 'react';
import { FILTERS ,FILTER_YEARS} from '../../constants/index';


const getActiveClass = (query, field, value)=>  query[field] === value ? "filter-item filter-item--active" : "filter-item";

const Filters = ({ onClickFilter, query }) => {
  return (
    <div>
      <span class="filters__heading">Filters</span>
      <div class="filters__list">
        <div class="filters__list-item">
          <div class="list__heading">
            <span>Launch Year</span>
          </div>
          <div class="list__items">
            {FILTER_YEARS.map(year => <div class= {getActiveClass(query, FILTERS.LAUNCH_YEAR, year)} onClick={() => onClickFilter(FILTERS.LAUNCH_YEAR, year)}>{year}</div>)}
          </div>
        </div>
        <div class="filters__list-item">
          <div class="list__heading">
            <span>Sucessful Launch </span>
          </div>
          <div class="list__items">
            <div class="filter-item"  class= {getActiveClass(query, FILTERS.LAUNCH_SUCCESS, 'true')}  onClick={() => onClickFilter(FILTERS.LAUNCH_SUCCESS, 'true')}>True</div>
            <div class="filter-item"  class= {getActiveClass(query, FILTERS.LAUNCH_SUCCESS, 'false')}  onClick={() => onClickFilter(FILTERS.LAUNCH_SUCCESS, 'false')}>False</div>

          </div>
        </div>
        <div class="filters__list-item">
          <div class="list__heading">
            <span>Sucessfull Landing</span>
          </div>
          <div class="list__items">
            <div class="filter-item"  class= {getActiveClass(query, FILTERS.LAND_SUCCESSS, 'true')} onClick={() => onClickFilter(FILTERS.LAND_SUCCESSS, 'true')}>True</div>
            <div class="filter-item"   class= {getActiveClass(query, FILTERS.LAND_SUCCESSS, 'false')} onClick={() => onClickFilter(FILTERS.LAND_SUCCESSS, 'false')}>False</div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Filters;