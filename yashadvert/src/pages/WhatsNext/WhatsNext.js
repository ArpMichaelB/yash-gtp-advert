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
            <span className="title">Whats Next?</span>
        
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
  </ol>

  <div className="carousel-inner">

  <div className="carousel-item active">
      <img className="d-block w-100" src={redLobster} alt="Red Lobster"/>
    </div>
    
    <div className="carousel-item">
      <img className="d-block w-100" src={caterpillar} alt="Caterpillar"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={polaris} alt="Polaris"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={angloAmerican} alt="Anglo American"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={johnDeere} alt="John Deere"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={deltaDental} alt="Delta Dental"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={johnson} alt="Polaris"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  
        </main>
    )
}

export default WhatsNext;