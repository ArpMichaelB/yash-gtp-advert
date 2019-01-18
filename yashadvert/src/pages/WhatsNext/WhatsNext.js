import React from 'react';

import './style.css';
import deltaDental from '../../assets/images/deltaDentalC.gif';
import angloAmerican from '../../assets/images/angloAmericanC.gif';
import caterpillar from '../../assets/images/caterpillarC.gif';
import johnDeere from '../../assets/images/johnDeereC.gif';
import redLobster from '../../assets/images/redLobsterC.gif';
import polaris from '../../assets/images/polarisC.gif';
import johnson from '../../assets/images/jandjC.gif';
import Slider from './slider';
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
                        {imageArray.map((img) => <Slider key={img.alt} src={img.src} alt={img.alt} />)}
                    </div>
                </div>
            </div>

        </main>
    )
}


export default WhatsNext;