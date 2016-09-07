var React = require('react');


var ProjectList = React.createClass({
    render: function() {

        var projLinkStyle = {
            textDecoration: 'none',
            color: 'yellow'
        },
        projStyle = {
            fontSize: '0.5em'
        };

        var projects = {
                'L4A': {
                    name: 'Letters4Animals.org',
                    url: 'http://letters4animals.org',
                    desc: 'Developed a fully responsive website for an animal advocacy group that takes advantage of multiple APIs in order to dynamically generate a fully-formatted, rich-text letter to a user and pre-populates it with information about a selected cause and their local government representative. Designed, developed, and deployed in one month as part of a scrum development team of 7 people.'
                },
                'CodeBoard': {
                    name: 'CodeBoard',
                    url: 'http://codeboard.vkutuyev.com',
                    desc: 'An online, collaborative whiteboard that lets users share code, draw on an HTML5 Canvas whiteboard, and chat with each other in realtime. Features the ability to save whiteboards, join pre-made lobbies, and share/work on large snippets of code with others online. Can be used as a teaching tool or as a debugging tool during a project’s development cycle. Made in three days as part of a two-person team.'
                },
                'Procedural': {
                    name: 'The Procedural Game',
                    url: 'https://github.com/vkutuyev/iOS_Procedural_Game',
                    desc: 'A side-scrolling platform with logically randomized, procedural level generation. Features three different play modes, a tutorial section with an AI-controller demonstration of the game, a dynamic difficulty that increases as the player gets further,  and a persistent score system that stores a user’s best score in an online database. Built in four days as a solo project and created completely programmatically with 1,700 lines of code in Xcode.'
                }
            };

        return (
            <div className='row'>
                <h4><a href={projects[this.props.project].url} target='_blank' style={projLinkStyle}>
                    {projects[this.props.project].name}
                </a></h4>
                <p style={projStyle}>{projects[this.props.project].desc}</p>
            </div>
        );
    }
});

module.exports = ProjectList;
