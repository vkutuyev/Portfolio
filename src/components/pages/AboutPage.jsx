var React = require('react');
var AboutCarousel = require('../AboutCarousel.jsx');


var AboutPage = React.createClass({
    render: function() {

        var headerStyle = {
                fontFamily: 'Righteous',
                textShadow: '1px 1px 4px black',
                textAlign: 'center',
                textDecoration: 'underline',
                marginBottom: '25px'
            },
            catStyle = {
                height: '45vh',
                marginTop: '2vh',
                fontFamily: 'Baumans'
            },
            listHeadStyle = {
                marginLeft: '15',
                fontSize: '1em',
                textShadow: '1px 1px 4px black'
            },
            listItemStyle = {
                textAlign: 'left',
                fontSize: '0.6em',
                marginTop: '5px'
            },
            siteText = {
                fontFamily: 'Raleway',
                textShadow: '1px 1px 4px black',
                fontSize: '0.5em',
                display: 'block',
                marginBottom: '10px',
                textOverflow: 'string'
            },
            linkStyle = {
                textDecoration: 'none',
                color: 'yellow'
            },
            caroStyle = {
                boxShadow: '0px 0px 25px white',
                borderRadius: '25px',
                background: 'black',
                padding: '15px'
            };

        return (
            <div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>About Me</h1>
                    <div className='col-xs-8' style={{marginRight: '25px'}}>
                        <span style={siteText}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Vadim, and it probably says something about me that this paragraph was the last thing I did on this site. I was born in Uzbekistan (then the Soviet Union, just to date myself) and grew up in Moscow until my family moved to California when I was 10, where I have lived since. I went to school in Orange County before going to college at UCLA as a computer science major, following the typical video games->computers->CS major trajectory. Having realized what computer science actually is, I promptly changed my major to avoid being angry at commas and semi-colons all day.
                        </span>
                        <span style={siteText}>
                            &nbsp;&nbsp;&nbsp;&nbsp;It took a long time but it wasn't until I attended a coding bootcamp that I rediscovered my love for programming and logical problem solving. I have been happily coding since and look forward to picking up more skills and experience every week. In my spare time I run a fantasy football league with my friends, watch Formula 1 at stupidly early hours of the day, get frustrated by Liverpool's ability to constantly throw away wins, and try not to get too angry at the annual UCLA Football Inexplicable Loss™.
                        </span>
                    </div>
                    <div className='col-xs-3' style={caroStyle}>
                        <AboutCarousel />
                    </div>
                </div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>About The Site</h1>
                    <div className='col-xs-9'>
                        <span style={siteText}>
                            &nbsp;&nbsp;&nbsp;&nbsp;This site was created with React using Browserify after spending about four days learning the basics of React. As a result things are sometimes... less than optimal due to me using the site as a chance to practice various rendering and data passing/binding techniques as well as just general messing around with neat code I've found elsewhere.
                        </span>
                        <span style={siteText}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Some of that code comes from 3rd-party libraries and projects, which I included as practice in modifying and incorporating new code I had never seen before. Namely: <a style={linkStyle} href='http://stickerjs.cmiscm.com/' target='_blank'>Sticker.js</a> is used for the sticker effect on my picture in the sidebar which I have modified to show a flag underneath, <a style={linkStyle} href='https://github.com/akiran/react-slick' target='_blank'>React-Slick</a> port of Slick for the image carousels above and on the home page which I modified to be smooth auto-scrolling,&nbsp;
                            <a style={linkStyle} href='https://bl.ocks.org/mbostock/11337835' target='_blank'>Mike Bostock's D3 animation</a> of a randomly traversed spanning tree which I have modified slightly and used for the background color change effect, and <a style={linkStyle} href='http://hakim.se/' target='_blank'>Hakim El Hattab's Rolling Links</a> effect which I have modified to match the icons in the sidebar and to work with React-Router.
                        </span>
                    </div>
                    <div className='col-xs-3'>
                        <span style={listHeadStyle}>Tech Used</span>
                        <ul style={listItemStyle}>
                            <li>React (w/ Browserify)</li>
                            <li>Express Server</li>
                            <li>CSS3 Animations</li>
                            <li>jQuery Element Resizing</li>
                            <li>D3+Canvas Animation</li>
                            <li>Sticker.js</li>
                            <li>Rolling Links</li>
                            <li>React-Slick Carousel</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AboutPage;
