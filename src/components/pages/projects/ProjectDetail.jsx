var React = require('react');

var ProjectDetailPage = React.createClass({

    render: function() {

        var projects = {
                '': {},
                'Letters4Animals': {
                    'name': "Letters4Animals",
                    'desc': "Designed, developed, and deployed a fully functional website for a non-profit that utilizes multiple APIs in order to generate and pre-populate a letter that a user can print or save and then send to their respective representative.",
                    'made': "Made in four weeks as part of a scrum dev team of 7 people.",
                    'tech': 'Node.js, AngularJS, PostgreSQL, Express.js, Bootstrap, jQuery, Google Civics API, Google Geocoder API, OpenStates API, Twilio, and several 3rd-party Angular modules',
                    'gif': 'Letters4Animals.gif',
                    'url': 'http://www.letters4animals.org/'
                },
                'CodeBoard' : {
                    'name': "CodeBoard",
                    'desc': "An online, collaborative whiteboard that lets users share code, draw on an HTML5 Canvas whiteboard, and chat with each other in realtime. Features the ability to save whiteboards, join pre-made lobbies, and share/work on large snippets of code with others online. Can be used as a teaching tool or as a debugging tool during a project’s development cycle.",
                    'made': "Made in three days as part of a two-person team.",
                    'tech': 'Node.js, AngularJS, Express.js, socket.io, HTML5, jQuery',
                    'gif': 'CodeBoard.gif',
                    'url': 'http://52.41.164.18/#/'
                },
                'WeatherShouldIGo' : {
                    'name': "#Weather Should I Go?",
                    'desc': "A website that lets users plan trips based on the weather. Users can select a specific type of weather, see instagram photos of a selected destination, and get an Expedia link to the appropriate destination based on the user's location.",
                    'made': "Made in four days as part of a team of four.",
                    'tech': 'HTML5, CSS3, Javascript, jQuery, PHP, MySQL, Open Weather API, Google Maps API, Instagram API',
                    'gif': 'WeatherShouldIGo.gif',
                    'url': 'http://weather-should-i-go.sharolchand.com/'
                },
                'ProceduralGame' : {
                    'name': "The Procedural Game",
                    'desc': "A side-scrolling platformer created completely programmatically in Xcode with logically randomized, procedural level generation. Features three different play modes, a tutorial section with an AI-controlled demonstration of the game, a dynamic difficulty that increases as the player gets further,  and a persistent score system that stores a user’s best score in an online database.",
                    'made': "Made in four days as a solo project.",
                    'tech': "Swift, Xcode SpriteKit, Google Firebase",
                    'gif': 'ProceduralGame.gif',
                    'url': 'https://github.com/vkutuyev/iOS_Procedural_Game'
                }
            },
            textStyle = {
                textAlign: 'left',
                fontFamily: 'Baumans',
                wordWrap: 'break-word',
                textShadow: '1px 1px 1px black',
                margin: '0'
            },
            titleStyle = {
                textShadow: '1px 1px 1px black',
                textAlign: 'center',
                margin: '0 auto 10px auto'
            },
            techStyle = {
                textShadow: '1px 1px 1px black',
                textAlign: 'center',
                margin: '10px auto 0 auto',
                verticalAlign: 'middle',
                display: 'block'
            },
            linkStyle = {
                textDecoration: 'none',
                color: '#FFB347'
            },
            gifStyle = {
                border: '2px solid black',
                boxShadow: '0px 0px 10px black',
                borderRadius: '15px'
            };

        return (
            <div>
                <div className='row' style={titleStyle}>
                    <h1 className='col-xs-8'><a href={projects[this.props.projName].url} target='_blank' style={linkStyle}>
                        {projects[this.props.projName].name}
                    </a></h1>
                </div>
                <div className='row' style={{display: 'flex', alignItems: 'center'}}>
                    <div className='col-xs-8'>
                        <img src={'img/projects/' + projects[this.props.projName].gif} width='100%' style={gifStyle}/>
                    </div>
                    <div className='col-xs-4' style={textStyle}>
                        <h4>{projects[this.props.projName].desc}</h4>
                        <h4>{projects[this.props.projName].made}</h4>
                    </div>
                </div>
                <div className='col-xs-8' style={techStyle}>
                    <h4><u>Tech Used</u></h4>
                    <h5>{projects[this.props.projName].tech}</h5>
                </div>
            </div>
        );
    }
})

module.exports = ProjectDetailPage;
