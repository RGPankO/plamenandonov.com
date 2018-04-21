import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Projects extends Component {

    constructor(props){
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }


    render() {
        return (
            <div className="jumbotron">
                <h2 className="display-3">Vauxhall</h2>
                <h3>Vauxhall - <a href="https://vauxhall.co.uk/" target="_blank">Project link</a></h3>
                <p>Drupal CMS driven website with focus on Webforms contrib module.</p>
                <p>Extensive use of OOP JS and CSS3 animations to achieve the desired UI/UX.</p>
                
                <ul className="project-gallery">
                    <li className="item"><a href={require('./images/vauxhall/vauxhall_1.jpg')} data-lightbox="vauxhall"><img src={require('./images/vauxhall/vauxhall_1.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/vauxhall/vauxhall_2.jpg')} data-lightbox="vauxhall"><img src={require('./images/vauxhall/vauxhall_2.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/vauxhall/vauxhall_3.jpg')} data-lightbox="vauxhall"><img src={require('./images/vauxhall/vauxhall_3.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/vauxhall/vauxhall_4.jpg')} data-lightbox="vauxhall"><img src={require('./images/vauxhall/vauxhall_4.jpg')} alt="" /></a></li>
                </ul>

                <h2>Technology used:</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Back-end: Drupal 8, PHP, MySQL,  
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Front-end: HTML5, CSS3, OOP JavaScript, jQuery
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                            Utility: Gulp, SASS, Babel, PostCSS - Autoprefixer
                    </li>
                </ul>
            
                <hr className="my-4" />
                <h2 className="display-3">Nesquik Studios</h2>
                <h3>Nestle - <a href="https://www.nesquikstudios.fr/" target="_blank">Project link</a></h3>
                <p>Drupal CMS driven website with multiplpe third party integrations.</p>
                <p>Gigya RAAS CIAM, Brightcove video platform, Fusepump, Salesforce, Google Tag Manager with custom events</p>
                
                <ul className="project-gallery">
                    <li className="item"><a href={require('./images/nesquik/nesquik_1.jpg')} data-lightbox="nesquik"><img src={require('./images/nesquik/nesquik_1.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/nesquik/nesquik_2.jpg')} data-lightbox="nesquik"><img src={require('./images/nesquik/nesquik_2.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/nesquik/nesquik_3.jpg')} data-lightbox="nesquik"><img src={require('./images/nesquik/nesquik_3.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/nesquik/nesquik_4.jpg')} data-lightbox="nesquik"><img src={require('./images/nesquik/nesquik_4.jpg')} alt="" /></a></li>
                </ul>

                <h2>Technology used:</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Back-end: Drupal 7, PHP, MySQL, Jenkins, Aquia Site Factory 
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Front-end: HTML5, CSS3, JavaScript, jQuery
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                            Utility: Gulp, SASS, PostCSS - Autoprefixer
                    </li>
                </ul>
                
                <hr className="my-4" />

                <h2 className="display-3">The Stage - Shoreditch</h2>
                <h3>Galliard Homes - <a href="http://www.thestageshoreditch.com/" target="_blank">Project link</a></h3>
                
                <p>Drupal CMS driven website with heavy focus on the UX and bespoke feel of every page.</p>
                <p>The website is divided in multiple sub-sites for every part of the large development.</p>
                
                <ul className="project-gallery">
                    <li className="item"><a href={require('./images/the_stage/the_stage_1.jpg')} data-lightbox="the_stage"><img src={require('./images/the_stage/the_stage_1.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/the_stage/the_stage_2.jpg')} data-lightbox="the_stage"><img src={require('./images/the_stage/the_stage_2.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/the_stage/the_stage_3.jpg')} data-lightbox="the_stage"><img src={require('./images/the_stage/the_stage_3.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/the_stage/the_stage_4.jpg')} data-lightbox="the_stage"><img src={require('./images/the_stage/the_stage_4.jpg')} alt="" /></a></li>
                </ul>
                
                <h2>Technology used:</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Back-end: Drupal 7, PHP, MySQL
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Front-end: HTML5, CSS3, JavaScript, jQuery
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Utility: Ruby Bundler, SASS, Compass
                    </li>
                </ul>
                
                <hr className="my-4" />
                
                <h2 className="display-3">Alpha Systems</h2>
                <h3>Alpha Systems - <a href="https://www.alfasystems.com/" target="_blank">Project link</a></h3>
                <p>Bespoke CMS, PHP driven website</p>
                <p>Developed multiple UI components with various animations and user interactions</p>
                
                
                <ul className="project-gallery">
                    <li className="item"><a href={require('./images/alfa/alfa_1.jpg')} data-lightbox="alfa"><img src={require('./images/alfa/alfa_1.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/alfa/alfa_2.jpg')} data-lightbox="alfa"><img src={require('./images/alfa/alfa_2.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/alfa/alfa_3.jpg')} data-lightbox="alfa"><img src={require('./images/alfa/alfa_3.jpg')} alt="" /></a></li>
                    <li className="item"><a href={require('./images/alfa/alfa_4.jpg')} data-lightbox="alfa"><img src={require('./images/alfa/alfa_4.jpg')} alt="" /></a></li>
                </ul>
                
                <h2>Technology used:</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Back-end:PHP, MySQL
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Front-end: HTML5, CSS3, OOP JavaScript, jQuery
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Utility: Gulp, SASS, PostCSS - Autoprefixer
                    </li>
                </ul>
            </div>
        )
    }
}

export default Projects;