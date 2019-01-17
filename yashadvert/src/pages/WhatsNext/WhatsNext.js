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

<h1 className="titleC">Clients</h1>

<p>
  YASH Technologies has a client base of 200+ that we are constantly working with to improve and advance the technological world.
</p>

<div class="row">
  <div class="row__inner">

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={redLobster} alt="Red Lobster"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={deltaDental} alt="Delta Dental"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={caterpillar} alt="Caterpillar"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={angloAmerican} alt="Anglo American"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={johnDeere} alt="John Deere"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={polaris} alt="Polaris"  />
      </div>
      <div class="tile__details">
        
      </div>
    </div>

    <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={johnson} alt="JohnsonAndJohnson"  />
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