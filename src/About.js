import React from 'react';
import NavBar from "./NavBar";

function About() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <div id="container">
                <h>
                    Hi, I’m Olivia. I first started coding in 2017.
                </h>
                <p>
                    Since then I have studied abroad, worked in a variety of languages, connected with developers from across the world, and found that my passion lies in front end and mobile development.

                    When I’m not coding I love to study languages that aren’t computer based, bake cookies, and watch anime.

                    Here, you will find five projects that I have been a part of over the years. Each is unique yet essential to my growth and identity as a developer.

                    Anticipating my graduation from the University of British Columbia this spring, I am eagerly searching for a full time position in Singapore or Vancouver that will allow this portfolio to grow for years to come.
                </p>
                <img src="IMG_5361.jpg" width="500" height="700"/>
            </div>
        </div>
    );
}

export default About;