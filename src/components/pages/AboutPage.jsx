var React = require('react');
var AboutCarousel = require('../AboutCarousel.jsx');


var AboutPage = React.createClass({
    render: function() {

        var headerStyle = {
                fontFamily: 'Righteous',
                textShadow: '1px 1px 4px black',
                textAlign: 'center',
                textDecoration: 'underline',
                marginBottom: '40px'
            },
            catStyle = {
                height: '40vh',
                marginTop: '5vh',
                fontFamily: 'Baumans'
            },
            listHeadStyle = {
                marginLeft: '15',
                fontSize: '1em',
                textShadow: '1px 1px 4px black'
            },
            listItemStyle = {
                textAlign: 'left',
                fontSize: '0.5em',
                marginTop: '5px'
            },
            siteText = {
                fontFamily: 'Raleway',
                textShadow: '1px 1px 4px black',
                fontSize: '0.6em',
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
                    <div className='col-xs-7 col-xs-offset-1'>
                        Test big
                    </div>
                    <div className='col-xs-3' style={caroStyle}>
                        <AboutCarousel />
                    </div>
                </div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>About The Site</h1>
                    <div className='col-xs-8 col-xs-offset-1'>
                        <span style={siteText}>&nbsp;&nbsp;&nbsp;&nbsp;This site was created with React using Browserify after spending about four days learning the basics of React. As a result things are sometimes... less than optimal due to me using the site as a chance to practice various rendering and data passing/binding techniques as well as just general messing around with neat code I've found elsewhere.</span>
                        <span style={siteText}>&nbsp;&nbsp;&nbsp;&nbsp;Some of that code comes from 3rd-party libraries and projects, which I included as practice in modifying and incorporating new code I had never seen before. Namely: <a className='roll' style={linkStyle} href='http://stickerjs.cmiscm.com/' target='_blank'>Sticker.js</a> is used for the sticker effect on my picture in the sidebar which I have modified to show a flag underneath, <a className='roll' style={linkStyle} href='https://github.com/akiran/react-slick' target='_blank'>React-Slick</a> port of Slick for the image carousels above and on the home page which I modified to be smooth auto-scrolling,&nbsp;
                        <a className='roll' style={linkStyle} href='https://bl.ocks.org/mbostock/11337835' target='_blank'>Mike Bostock's D3 animation</a> of a randomly traversed spanning tree which I have modified slightly and used for the background color change effect, and <a className='roll' style={linkStyle} href='http://hakim.se/' target='_blank'>Hakim El Hattab's Rolling Links</a> effect which I have modified to match the icons in the sidebar and to work with React-Router.</span>
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
