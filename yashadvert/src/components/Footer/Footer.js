import React from 'react';
import Sec from '../../hoc/Sec/Sec';

import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";

import './style.css';

const Footer = (props, context) => {
    return (

        <Sec>
        <div className="footer">
            <div id="section-1" className="section">
                <h4>Quick Links</h4>
                <table className="footer-table">
                    <tbody>
                        <tr className="footer-table-row">
                            <td>Digital Transformation</td>
                            <td>Big Data</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Data Sciences And Analytics</td>
                            <td>Cloud Services</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Mobility Services</td>
                            <td>Managed Services</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Testing Services</td>
                            <td>Infrastructure Services</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Strategic Consulting</td>
                            <td>Enterprise Modernization</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>SAP S/4HANA Cloud</td>
                            <td>Office 365</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="section">
                <h4>Subsidiaries</h4>
                <table className="footer-table">
                    <tbody>
                        <tr className="footer-table-row">
                            <td>ITPM Consulting</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>SoltiusME</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Aaseya IT Services Pvt. Ltd.</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>Codiant Technologies</td>
                        </tr>
                        <tr className="footer-table-row">
                            <td>c5mi</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="section">
                <h4>Newsletter</h4>
                <p id="newsletter-p">Sign up with your business email address to receive our latest news and updates</p>
                <input type="text" id="text-box" placeholder="Your Email"/><input type="submit" value=">" id="submit-arrow" />
            </div>
        </div>
        <div id="lower-footer">
            <div id="line"></div>
            <div id="lower-container">
                <div className="lower-footer-third">
                    <table>
                        <tbody>
                            <tr>
                                <td>Copyright © 2019. YASH Technologies. All Rights Reserved.</td>
                            </tr>
                            <tr>
                                <td><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="lower-footer-third lower-footer-center">
                    CSR / Sitemap / Legal / Privacy policy
                </div>
                <div className="lower-footer-third lower-footer-center">
                    <img className="icon" src={facebook} alt="Facebook Icon" />
                    <img className="icon" src={twitter} alt="Twitter Icon" />
                    <img className="icon" src={linkedin} alt="LinkedIn Icon" />
                </div>
            </div>
        </div>
        </Sec>
    );
}

export default Footer;