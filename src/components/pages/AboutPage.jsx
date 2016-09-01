var React = require('react');


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
                textAlign: 'center',
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
            };

        return (
            <div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>About Me</h1>
                    <div className='col-xs-6 col-xs-offset-2'>
                        Test big
                    </div>
                    <div className='col-xs-2'>
                        Test small
                    </div>
                </div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>About The Site</h1>
                    <div className='col-xs-8 col-xs-offset-1'>
                        <span style={siteText}>&nbsp;&nbsp;&nbsp;&nbsp;This site was created with ReactJS using Browserify after spending about four days learning the basics of React. As a result things are sometimes... less than optimal due to me using them as a chance to practice various rendering and data binding techniques.</span>
                        <span style={siteText}>&nbsp;&nbsp;&nbsp;&nbsp;I've also used a handful of 3rd-party libraries as practice in modifying and incorporating new code I had never seen before. Namely: <a style={linkStyle} href='http://stickerjs.cmiscm.com/' target='_blank'>Sticker.js</a> used for the sticker effect on my picture in the sidebar which I have modified to show a flag underneath, <a style={linkStyle} href='https://bl.ocks.org/mbostock/11337835' target='_blank'>Mike Bostock's D3 animation</a> of a randomly traversed spanning tree which I have modified slightly and used for the background color change effect, and <a style={linkStyle} href='http://hakim.se/' target='_blank'>Hakim El Hattab's Rolling Links</a> effect which I have modified to match the icons in the sidebar.</span>
                    </div>
                    <div className='col-xs-3' style={listHeadStyle}>
                        Tech Used
                        <ul style={listItemStyle}>
                            <li>React (w/ Browserify)</li>
                            <li>Express Server</li>
                            <li>CSS3 Animations</li>
                            <li>jQuery Element Resizing</li>
                            <li>D3+Canvas Animation</li>
                            <li>Sticker.js</li>
                            <li>Rolling Links</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AboutPage;
