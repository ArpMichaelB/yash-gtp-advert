import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Nav from '../../components/Nav/Nav';
import AboutGTP from '../../pages/AboutGTP/AboutGTP';
import TraineeWork from '../../pages/TraineeWork/TraineeWork';
import WhatsNext from '../../pages/WhatsNext/WhatsNext';
import Footer from '../../components/Footer/Footer';

import '../../styles/global.css';



class Layout extends Component {

    render() {
        return (
            <Aux>
                <header>
                    <Nav />
                </header>
                <div className="container">
                    <div className="wrapper">
                        <AboutGTP />
                        <TraineeWork />
                        <WhatsNext />
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </Aux>
        )
    }
}

export default Layout;
