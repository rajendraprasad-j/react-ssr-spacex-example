import React, { useState } from 'react';

import { api } from '../../api';
import Filters from './Filters'
import SpaceXList from './SpaceXList'
import { useServerData } from '../../state/serverDataContext';
import { INITIAL_FILTER } from '../../constants/index';
import { getQueryString } from '../../utils/helpers'
const Main = () => {
  const initialLaunch = useServerData(data => {
    return data.allLaunchData || [];
  });
  const [launch, setLaunch] = useState(initialLaunch);
  const [ query, setQuery] = useState({
    ...INITIAL_FILTER
  })

  const onClickFilter = (type, value)=> {
    setLaunch([])
    query[type] = value;
    setQuery(query)
    api.launch.filter(getQueryString(query))
    .then(data => {
      setLaunch(data);
    })
  }

  return (
      <>
          <aside class="filters"> <Filters query={query} onClickFilter={onClickFilter} /></aside>
          <main class="launch-programs"> <SpaceXList launch={launch}  /></main>
      </>
    );
  
}

Main.fetchData = () => {
  return api.launch.filter(getQueryString(INITIAL_FILTER)).then(allLaunchData => {
    return {
      allLaunchData
    };
  });
};

export default Main;