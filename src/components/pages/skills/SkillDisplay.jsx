var React = require('react');


var SkillDisplay = React.createClass({
    getInitialState: function() {
        return {picked: 'Select a Tech'};
    },
    hovered: function(e) {
        var target = $(e.target);
        if(target.hasClass('aimHere')){
            console.log('=========target=========');
            console.log(target);
            console.log('=========target=========');
            target.css('backgroundColor', 'yellow');
            target.css('color', 'black');
            // var parent = $(target[0]).children().prevObject[0].parentNode;
            // e.target.style.color = 'yellow';
            // parent.style.boxShadow = '0px 0px 10px yellow';
            // this.setState({picked: e.target.innerHTML});
        }
    },
    hoverLeft: function(e) {
        var target = $(e.target);
        if(target.hasClass('aimHere')){
            target.css('backgroundColor', 'grey');
            target.css('color', 'white');    
        }
        // var target = $(e.target);
        // if(target.hasClass('techBox')){
        //     var parent = target.children().prevObject[0].parentNode;
        //     // target.css('color', 'white');
        //     parent.style.boxShadow = '0px 0px 10px black';
        //     // this.setState({picked: 'Select a Tech'});
        //     console.log('left');
        // }
        // this.setState({picked: 'Select a Tech'});
    },
    render: function() {

        var techs = {
            '': [],
            'design': [
                {
                    name: 'HTML5',
                    logo: 'htmlIcon.png'
                },
                {
                    name: 'CSS3',
                    logo: 'cssIcon.png'
                },
                {
                    name: 'jQuery',
                    logo: 'jqueryIcon.png'
                },
                {
                    name: 'Bootstrap',
                    logo: 'bootstrapIcon.png'
                },
                {
                    name: 'AngularJS',
                    logo: 'angularIcon.png'
                },
                {
                    name: 'React',
                    logo: 'reactIcon.png'
                },
                {
                    name: 'Photoshop',
                    logo: 'photoshopIcon.png'
                },
                {
                    name: 'Premiere',
                    logo: 'premiereIcon.png'
                }
            ],
            'dev': [
                {
                    name: 'JavaScript',
                    logo: 'javascriptIcon.png'
                },
                {
                    name: 'PHP',
                    logo: 'phpIcon.png'
                },
                {
                    name: 'Swift',
                    logo: 'swiftIcon.png'
                },
                {
                    name: 'Python',
                    logo: 'pythonIcon.png'
                },
                {
                    name: 'Node.js',
                    logo: 'nodeIcon.png'
                },
                {
                    name: 'CodeIgniter',
                    logo: 'codeigniterIcon.png'
                },
                {
                    name: 'Xcode',
                    logo: 'xcodeIcon.png'
                },
                {
                    name: 'Django',
                    logo: 'djangoIcon.png'
                }
            ],
            'data': [
                {
                    name: 'MySQL',
                    logo: 'mysqlIcon.png'
                },
                {
                    name: 'PostgreSQL',
                    logo: 'postgresIcon.png'
                },
                {
                    name: 'MongoDB',
                    logo: 'mongoIcon.png'
                },
                {
                    name: 'Firebase',
                    logo: 'firebaseIcon.png'
                },
                {
                    name: 'Flux',
                    logo: 'fluxIcon.png'
                },
                {
                    name: 'Redux',
                    logo: 'reduxIcon.png'
                },
                {
                    name: 'CoreData',
                    logo: 'coredataIcon.png'
                },
                {
                    name: 'Ajax/API',
                    logo: 'ajaxIcon.png'
                }
            ]
        };

        var techStyle = {
                marginBottom: '25',
                marginRight: '10',
                background: 'rgb(108, 106, 107)',
                border: '2px solid black',
                borderRadius: '15',
                boxShadow: '0px 0px 10px black',
                minHeight: '60px',
                padding: '15px',
                display: 'flex',
                alignItems: 'center'
            },
            nameStyle = {
                fontFamily: 'Poiret One',
                textShadow: '1px 1px 4px black',
                textAlign: 'center',
                fontSize: '0.8em'
            },
            catStyle = {
                minHeight: '35vh'
            },
            headerStyle = {
                textAlign: 'center',
                textShadow: '1px 1px 4px black',
                marginBottom: '25',
                fontFamily: 'Righteous'
            };

        return (
                <div className='row' onMouseOver={this.hovered} onMouseOut={this.hoverLeft}>
                    {techs[this.props.skName].map(function(tech){
                        return (
                            <div className='col-xs-3' style={{minWidth: '220px'}} key={Date.now() / 1000 + tech.name}>
                                <div className='row aimHere' style={techStyle}>
                                    <div className='col-xs-4 imgDiv'>
                                        <img src={'img/techIcons/'+tech.logo} width='45vw' height='45vh'/>
                                    </div>
                                    <div className='col-xs-7 techBox' style={nameStyle}>
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
        );
    }
});

module.exports = SkillDisplay;
