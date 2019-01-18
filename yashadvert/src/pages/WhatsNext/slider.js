import React from 'react';
import deltaDental from '../../assets/images/deltaDentalC.gif';
import angloAmerican from '../../assets/images/angloAmericanC.gif';
import caterpillar from '../../assets/images/caterpillarC.gif';
import johnDeere from '../../assets/images/johnDeereC.gif';
import redLobster from '../../assets/images/redLobsterC.gif';
import polaris from '../../assets/images/polarisC.gif';
import johnson from '../../assets/images/jandjC.gif';

const imageArray = [
    {
        src: deltaDental,
        alt: "Delta Dental"
    },

    {
        src: redLobster,
        alt: "Red Lobster"
    },

    {
        src: angloAmerican,
        alt: "Anglo American"
    },

    {
        src: caterpillar,
        alt: "Caterpillar"
    },

    {
        src: johnDeere,
        alt: "John Deere"
    },

    {
        src: polaris,
        alt: "Polaris"
    },

    {
        src: johnson,
        alt: "Johnson & Johnson"
    },
]

function Slider({src, alt}) {
  return (
    
      <div class="tile">
      <div class="tile__media">
        {imageArray.map((img) => {
            return(
            <img class="tile__img" key={img.alt} src={img.src} alt={img.alt}  />
            )
        })
        }

        
      </div>
      <div class="tile__details">  </div>
    </div>
    
  )
}



export default Slider;
