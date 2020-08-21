import React from 'react';

import { getProp } from '../../utils/helpers'

const SpaceXList = ({ launch, loading }) => {

  return (
    <div className="cards">
      
      {loading ? <span>Loading...</span>: <span></span> }
      {launch.map(r =>
        <div key={r.mission_name} className="cart__item">
          <div className="cart__contents">
            <div className="cart__img">
              <img loading="lazy" src={r.links.mission_patch_small} alt={`${r.mission_name} img`}></img>
            </div>
            <div className="cart__bottom">
              <div className="cart__heading"> {r.mission_name}</div>
              <div className="cart__mission-list">
                <div className="cart__mission-list--heading"> Mission Ids</div>
                <ul>{r.mission_id.map(missionId => <li key={missionId}>{missionId}</li>)}</ul>
              </div>
              <div className="cart__details">
                <div className="cart__details--item"> <span>Launch Year</span><span>{r.launch_year}</span></div>
                <div className="cart__details--item"> <span>Successfull launch</span><span>{ getProp(r, 'launch_success', '')+""}</span></div>
                <div className="cart__details--item"> <span>Successful landing</span><span>{ getProp(r, 'rocket.first_stage.cores.0.land_success', '-' )+''}</span></div>
              </div>
            </div>
          </div>
        </div>)}
    </div>
  );

}


export default SpaceXList;