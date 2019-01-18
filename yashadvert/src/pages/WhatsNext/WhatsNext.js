import React from 'react';

import './style.css';
import Slider from './slider';

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
                        <Slider/>
                    </div>
                </div>
            </div>

        </main>
    )
}


export default WhatsNext;
