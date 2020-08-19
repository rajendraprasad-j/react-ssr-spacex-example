import React from 'react';



const SpaceXList = ({ launch }) => {

  return (
    <div class="cards">
      {launch.map(r =>
        <div class="cart__item">
          <div class="cart__contents">
            <div class="cart__img">
              <img loading="lazy" src={r.links.mission_patch_small} alt={`${r.mission_name} img`}></img>
            </div>
            <div class="cart__bottom">
              <div class="cart__heading"> {r.mission_name}</div>
              <div class="cart__mission-list">
                <div class="cart__mission-list--heading"> Mission Ids</div>
                <ul>{r.mission_id.map(missionId => <li key={missionId}>{missionId}</li>)}</ul>
              </div>
              <div class="cart__details">
                <div class="cart__details--item"> <span>Launch Year</span><span>{r.launch_year}</span></div>
                <div class="cart__details--item"> <span>Successfull launch</span><span>{typeof r.launch_success === 'undefined' ? '-' : r.launch_success+''}</span></div>
                <div class="cart__details--item"> <span>Successful landing</span><span>{typeof r.land_success === 'undefined' ? '-' : r.land_success+''}</span></div>
              </div>
            </div>
          </div>
        </div>)}
    </div>
  );

}


export default SpaceXList;