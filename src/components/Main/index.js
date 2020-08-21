import React, { useState } from 'react';

import { api } from '../../api';
import Filters from './Filters'
import SpaceXList from './SpaceXList'
import { useServerData } from '../../state/serverDataContext';
import { getQueryString } from '../../utils/helpers'
const Main = () => {
  const initialLaunch = useServerData(data => {
    return data.allLaunchData || [];
  });
  const [launch, setLaunch] = useState(initialLaunch);
  const [ query, setQuery] = useState({})
  const [ loading, setLoading] = useState(false)

  const onClickFilter = (type, value)=> {
    setLaunch([])
    setLoading(true)
    query[type] = value;
    setQuery(query)
    api.launch.filter(getQueryString(query))
    .then(data => {
      setLoading(false)
      setLaunch(data);

    })
  }

  return (
      <>
          <aside className="filters"> <Filters query={query} onClickFilter={onClickFilter} /></aside>
          <main className="launch-programs"> <SpaceXList loading={loading} launch={launch}  /></main>
      </>
    );
  
}

Main.fetchData = () => {
  return api.launch.filter(getQueryString()).then(allLaunchData => {
    return {
      allLaunchData
    };
  });
};

export default Main;