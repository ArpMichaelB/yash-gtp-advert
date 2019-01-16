import React from 'react';

import './style.css';

const AboutGTP = (props, context) => {

    return (

        <main className="about_gtp_content">
            {/* I hate this so much please pick a better title design nobody sees this without looking for it specifically*/}
            <div className="title"><p>About Yash GTP</p></div>
            <div className="about_gtp_heading">
                Description
            </div>
            <div className="about_gtp_paragraph">
                <p>
                    The Graduate Training Program at Yash Technologies focuses on both contemporary and upcoming technologies. 
                    <br/>
                    As an example, the second batch of trainees (the workers who initially designed this site) had a training focusing heavily on Java libraries, such as Spring, (majority Rest and JDBC), AWS, JUnit, and Hibernate. 
                    <br/>
                    Additionally, there was some focus on other non-Java technologies, including (but not limited to) ReactJS, NodeJS, and frontend technologies like Java Servlets, JSP pages, and Spring MVC.
                </p>
            </div>
            <div className="about_gtp_heading">
                Technologies
            </div>
            <div className="about_gtp_list">
                <ul>
                    <li>
                        Spring
                        <ul>
                            <li>
                                Rest
                            </li>
                            <li>
                                JDBC
                            </li>
                            <li>
                                MVC
                            </li>
                        </ul>
                    </li>
                    <li>
                        Amazon Web Services
                    </li>
                    <li>
                        Hibernate
                    </li>
                    <li>
                        JUnit
                    </li>
                    <li>
                        ReactJS
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        Servlets
                    </li>
                    <li>
                        JSP
                    </li>
                </ul>
            </div>
            <div className="about_gtp_heading">
                Upcoming Programs
            </div>
            <div className="about_gtp_paragraph">
                <p>
                    Upcoming trainees should expect a much more precise focus on .Net, and by extension, Microsoft Azure, rather than the earlier training on Amazon Web Services.
                </p>
            </div>
        </main>
    )
}

export default AboutGTP;