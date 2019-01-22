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
                            <td className="footer-table-data"><a href="https://www.yash.com/digital-transformation/">Digital Transformation</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/digital-transformation/big-data/">Big Data</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="https://www.yash.com/digital-transformation/analytics/">Data Sciences And Analytics</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/digital-transformation/cloud/">Cloud Service</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="https://www.yash.com/digital-transformation/mobility-services/">Mobility Services</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/it-outsourcing/managed-services/">Managed Services</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="https://www.yash.com/it-outsourcing/testing/">Testing Services</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/it-outsourcing/infrastructure-management/infrastructure-services/">Infrastructure Services</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="https://www.yash.com/it-outsourcing/strategic-consulting/">Strategic Consulting</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/it-outsourcing/application-services/enterprise-modernization/">Enterprise Modernization</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="https://www.yash.com/technology/sap/cloud-erp/sap-s4-hana/">SAP S/4HANA Cloud</a></td>
                            <td className="footer-table-data"><a href="https://www.yash.com/technology/microsoft/application/office-365/">Office 365</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="section">
                <h4>Subsidiaries</h4>
                <table className="footer-table">
                    <tbody>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="http://www.itpmconsulting.com/">ITPM Consulting</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="http://www.soltiusme.com/home/">SoltiusME</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="http://www.aaseya.com/">Aaseya IT Services Pvt. Ltd.</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="http://www.codiant.com/">Codiant Technologies</a></td>
                        </tr>
                        <tr className="footer-table-row">
                            <td className="footer-table-data"><a href="http://www.c5mi.com/">c5mi</a></td>
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
                <a href="https://www.yash.com/corporate-social-responsibility/">CSR</a> / <a href="https://www.yash.com/site-map/">Sitemap</a> / 
                <a href="https://www.yash.com/legal/">Legal</a> / <a href="https://www.yash.com/privacy-policy/">Privacy policy</a>
                </div>
                <div className="lower-footer-third lower-footer-center">
                    <a href="https://www.facebook.com/YASHCorporate"><img className="icon" src={facebook} alt="Facebook Icon" /></a>
                    <a href="https://twitter.com/YASH_Tech"><img className="icon" src={twitter} alt="Twitter Icon" /></a>
                    <a href="https://www.linkedin.com/company/yash-technologies/"><img className="icon" src={linkedin} alt="LinkedIn Icon" /></a>
                </div>
            </div>
        </div>
        </Sec>
    );
}

export default Footer;