import React from 'react';

import './style.css';
import deltaDental from '../../assets/images/deltaDentalC.gif';
import angloAmerican from '../../assets/images/angloAmericanC.gif';
import caterpillar from '../../assets/images/caterpillarC.gif';
import johnDeere from '../../assets/images/johnDeereC.gif';
import redLobster from '../../assets/images/redLobsterC.gif';
import polaris from '../../assets/images/polarisC.gif';
import johnson from '../../assets/images/jandjC.gif';
const WhatsNext = (props, context) => {
    
    return (
        <main className="whats_next_content">

            <span className="title"><p>Whats Next?</p></span>

            <div class="contain">

<h1>YASH Technologies Customer's</h1>

<p>
  YASH Technologies has a customer base of 200+ that we are constantly working with to improve and advance the Technological World.
</p>

<div class="row">
  <div class="row__inner">

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={redLobster} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={deltaDental} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={caterpillar} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={angloAmerican} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={johnDeere} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={polaris} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={johnson} alt=""  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    

  </div>
</div>

</div>

        </main>
    )
}

export default WhatsNext;