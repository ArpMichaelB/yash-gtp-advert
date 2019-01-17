import React from 'react';
import './style.css';
import Tile from './Tile';

import spring from "./spring.svg";
import java from "./java.svg";
import sql from "./sql.svg";
import nodejs from "./nodejs.svg";
import amazon from "./amazon.svg";
import react from "./react.svg";
import hibernate from "./hibernate.svg"

class TraineeWork extends React.Component {
    render(){
        let springDesc = "Java and Spring were used to develop different web-apps, including doctor appointment apps, online testing apps, and to-do apps.  The trainees learned how to manage java beans and configure a Spring project using annotations, XML, and classes.  The trainees also learned how to connect Spring projects to MySQL databases, use dependency injection, and how to use the Spring Web Services."
        let javaDesc = "The trainees learned Core Java, how to develop web applications, and how to deploy them on servers.  They also learned how to use servlets, JSP pages, Swing, and Mockito.  The trainees used Java to develop an expense tracker in order to practice and hone their skills."
        let sqlDesc = "At the very beginning of the training, one of the main subjects was Dataside.  The trainees learned about Data-pools, data-warehouses, and the purpose of ETL.  In order to practice their skills, the trainees worked with MySQL using Java and created applications with databases in the backend."
        let nodeDesc = "Trainees learned to create express servers, and how to test them using mocha and chai. A related project was to make an employee database API."
        let awsDesc = "Trainees learned the major aws services, S3 buckets, EC2 instances, and account management. Trained created apps that edit images in S3 buckets, both inside and outside an EC2 instance."
        let hibernateDesc = "The trainees learned Hibernate in order to make their java applications with databases much smoother to develop.  Using Hibernate, the trainees re-made the applications they had made earlier in the training, but much faster and smoother, as well as improving them along the way."
        let reactDesc = "After a small session of learning Javascript and HTML, the trainees learned React Js.  With the knowledge of both front-end and back-end, the trainees developed personal full-scale applications with their newfound full-stack skills."
        return (
            <main className="trainee_work_content">
                <div className="title"><p>Trainee Work</p></div>
                <Tile image={<img src={spring} alt="Spring" />} desc={springDesc}/>
                <Tile image={<img src={java} alt="Java" />} desc={javaDesc}/>
                <Tile image={<img src={sql} alt="SQL" />} desc={sqlDesc}/>
                <Tile image={<img src={nodejs} alt="NodeJS" />} desc={nodeDesc}/>
                <Tile image={<img src={amazon} alt="AWS" />} desc={awsDesc}/>
                <Tile image={<img src={hibernate} alt="Hibernate" />} desc={hibernateDesc}/>
                <Tile image={<img src={react} alt="ReactJs" />} desc={reactDesc}/>
            </main>
        );
    }
}

export default TraineeWork;