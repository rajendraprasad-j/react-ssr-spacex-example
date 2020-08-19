import React  from 'react';
import { FILTERS ,FILTER_YEARS} from '../../constants/index';


const getActiveClass = (query, field, value)=>  query[field] === value ? "filter-item filter-item--active" : "filter-item";

const Filters = ({ onClickFilter, query }) => {
  const keyPressed = (event, key,value) =>  {
    if (event.key === "Enter") {
      onClickFilter(key, value)
    }
  }
  let tabindex=1;
  return (
    <div>
      <span className="filters__heading">Filters</span>
      <div className="filters__list">
        <div className="filters__list-item">
          <div className="list__heading">
            <span>Launch Year</span>
          </div>
          <div className="list__items">
            {FILTER_YEARS.map((year) => <div key={year} tabIndex={tabindex++} className= {getActiveClass(query, FILTERS.LAUNCH_YEAR, year)} onClick={() => onClickFilter(FILTERS.LAUNCH_YEAR, year)} onKeyPress={(e) => keyPressed(e, FILTERS.LAUNCH_YEAR, year)}>{year}</div>)}
          </div>
        </div>
        <div className="filters__list-item">
          <div className="list__heading">
            <span>Sucessful Launch </span>
          </div>
          <div className="list__items">
            <div tabIndex={tabindex++}  className= {getActiveClass(query, FILTERS.LAUNCH_SUCCESS, 'true')}  onClick={() => onClickFilter(FILTERS.LAUNCH_SUCCESS, 'true')} onKeyPress={(e) => keyPressed(e, FILTERS.LAUNCH_SUCCESS, 'true')}>True</div>
            <div tabIndex={tabindex++} className= {getActiveClass(query, FILTERS.LAUNCH_SUCCESS, 'false')}  onClick={() => onClickFilter(FILTERS.LAUNCH_SUCCESS, 'false')} onKeyPress={(e) => keyPressed(e, FILTERS.LAUNCH_SUCCESS, 'false')}>False</div>

          </div>
        </div>
        <div className="filters__list-item">
          <div className="list__heading">
            <span>Sucessfull Landing</span>
          </div>
          <div className="list__items">
            <div  tabIndex={tabindex++} className= {getActiveClass(query, FILTERS.LAND_SUCCESSS, 'true')} onClick={() => onClickFilter(FILTERS.LAND_SUCCESSS, 'true')} onKeyPress={(e) => keyPressed(e, FILTERS.LAND_SUCCESSS, 'true')}>True</div>
            <div  tabIndex={tabindex++}  className= {getActiveClass(query, FILTERS.LAND_SUCCESSS, 'false')} onClick={() => onClickFilter(FILTERS.LAND_SUCCESSS, 'false')} onKeyPress={(e) => keyPressed(e, FILTERS.LAND_SUCCESSS, 'false')}>False</div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Filters;