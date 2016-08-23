var React = require('react');

var ProjectDetailPage = React.createClass({

    render: function() {

        var projects = {
                '': {
                    'desc': '',
                    'tech': '',
                    'img': ''
                },
                'Letters4Animals': {
                    'name': "Letters4Animals",
                    'desc': "Designed, developed, and deployed a fully functional website in four weeks for a non-profit that utilizes multiple APIs in order to generate and pre-populate a letter that a user can send to their respective representative. Worked on all aspects of the website but was mostly in charge of connecting the back-end functionality to the front-end letter presentation, including smoothly integrating multiple APIs in order to retrieve the appropriate government official based on a selected cause and the user's location. Researched and implemented methods for presenting a letter to a user, as well as giving them the convenient ability to print the presented letter out or save it as a PDF.",
                    'tech': 'Node.js, AngularJS, PostgreSQL, Express.js, Bootstrap, jQuery, Google Civics API, Google Geocoder API, OpenStates API, Twilio, and several 3rd party Angular modules',
                    'img': 'l4alogo.png',
                    'url': 'http://www.letters4animals.org/'
                },
                'CodeBoard' : {
                    'name': "CodeBoard",
                    'desc': "An online, collaborative whiteboard that lets users share code, draw on an HTML5 Canvas whiteboard, and chat with each other in realtime. Features the ability to save whiteboards, join pre-made lobbies, and share/work on large snippets of code with others online. Can be used as a teaching tool or as a debugging tool during a project’s development cycle. Made in three days as part of a two-person team.",
                    'tech': 'Node.js, AngularJS, Express.js, socket.io, HTML5, jQuery',
                    'img': 'codeBoardLogo.png',
                    'url': 'http://52.41.164.18/#/'
                },
                'WeatherShouldIGo' : {
                    'name': "#Weather Should I Go?",
                    'desc': "Built a website in four days as part of a team of 4 that lets users plan trips based on the weather. Users can select a specific type of weather, see instagram photos of a selected destination, and get an Expedia link to the appropriate destination based on the user's location.",
                    'tech': 'HTML5, CSS3, Javascript, jQuery, PHP, MySQL, Ajax, Open Weather API, Google Maps API, Instagram API',
                    'img': 'weatherLogo.png',
                    'url': 'http://weather-should-i-go.sharolchand.com/'
                },
                'ProceduralGame' : {
                    'name': "The Procedural Game",
                    'desc': "A side-scrolling platformer with logically randomized, procedural level generation. Features three different play modes, a tutorial section with an AI-controller demonstration of the game, a dynamic difficulty that increases as the player gets further,  and a persistent score system that stores a user’s best score in an online database. Built in four days as a solo project and created completely programmatically with 1,700 lines of code in Xcode.",
                    'tech': "Swift, Xcode SpriteKit, Google Firebase",
                    'img': 'gameLogo.png'
                }
            },
            textStyle = {
                textAlign: 'center',
                fontFamily: 'Baumans'
            },
            titleStyle = {
                textShadow: '1px 1px 1px black',
                textAlign: 'center',
                margin: '0 auto 10px auto'
            },
            descStyle = {
                textShadow: '1px 1px 1px black'
            },
            techStyle = {
                textShadow: '1px 1px 1px black',
                textAlign: 'center',
                margin: '10px auto 0 auto'
            },
            linkStyle = {
                textDecoration: 'none',
                color: '#FFB347'
            };

        return (
            <div>
                <div className='row' style={titleStyle}>
                    <h1><a href={projects[this.props.projName].url || 'javascript:void(0);'} target='_blank' style={linkStyle}>
                        {projects[this.props.projName].name}
                    </a></h1>
                </div>
                <div className='row'>
                    <div className='col-xs-8'>
                        Image
                    </div>
                    <div className='col-xs-4' style={textStyle}>
                        <div className='row' style={descStyle}>
                            <h4>{projects[this.props.projName].desc}</h4>
                        </div>
                    </div>
                </div>
                <div className='row' style={techStyle}>
                    <h4><u>Tech Used</u></h4>
                    <h5>{projects[this.props.projName].tech}</h5>
                </div>
            </div>
        );
    }
})

module.exports = ProjectDetailPage;
