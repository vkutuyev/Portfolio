var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var SkillDisplay = React.createClass({
    getInitialState: function() {
        return {picked: ''};
    },
    hovered: function(e) {
        var target = $(e.target);
        if(target.hasClass('techBox')){
            target[0].parentNode.style.background = 'yellow';
            target.css('color', 'black');
            if(this.state.picked == ''){
                this.setState({picked: e.target.innerHTML});
            }
        }
    },
    hoverLeft: function(e) {
        if($(e.target).hasClass('techBox')){
            this.setState({picked: ''});
        }
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
            },
            techniques = {
                '': ['Hover Over a Technology'],
                ////////////////////////////////////////////////////////////////////////////////////
                'HTML5': ['Video/Audio element intergration.', 'Custom element attributes.', 'Using the <canvas> element.'],
                'CSS3': ['Responsive design (% and view-based element sizing).', 'Transitions/animations.'],
                'jQuery': ['Dynamic element/attribute manipulation.', 'jQuery UI.', 'jQuery plugins.'],
                'Bootstrap': ['Responsive design (grid/column system).', 'Smooth component integration.', 'Usage with other CSS frameworks/technologies.'],
                'AngularJS': ['Only for front-end or as part of a full MVC.', 'Data binding and manipulation across views/controllers/models.', 'Integration of popular Angular modules like ngAnimate and ngStorage.'],
                'React': ['Modularized design for efficient development.', 'One-way top-down data handling across components.'],
                'Photoshop': ['Basic photo/image editing and layer/mask manipulation.', 'Animated GIF creation/editing.', 'A decade of casual use and enough experience to learn new techniques quickly.'],
                'Premiere': ['Basic video editing.', 'Video/audio splicing.', 'Video format conversion.'],
                ////////////////////////////////////////////////////////////////////////////////////
                'JavaScript': ['Used in logic on both front and back-ends.', 'Experience with basic JS as well as templates such as EJS and JSX.'],
                'PHP': ['Used in logic on both front and back-ends.', 'Experience with procedural design as well as OOP as part of a full MVC.'],
                'Swift': ['Experience creating single-page and multi-view apps.', 'Have used multiple Swift frameworks such as CoreData, CoreLocation, and CoreMotion.', 'Asynchronous data transfer/persistence across multiple views.'],
                'Python': ['Used in logic on both front and back-ends.', 'Used for basic web development with Flask as well as part of several MVC frameworks.'],
                'Node.js': ['Used for testing and debugging projects of all sizes.', 'Used as part of MEAN-stack apps, as well as a back-end for front-end frameworks such as React.'],
                'CodeIgniter': ['Experience creating full MVC projects such as a message board and basic store.', 'Used as part of LAMP-stack apps.'],
                'Xcode': ['Experience with single-page apps, multi-view/view controller projects, and SpriteKit.'],
                'Django': ['Understand concept of modularization of components.', 'Familiar with MVC framework and some of the built-in applications included with Django.'],
                ////////////////////////////////////////////////////////////////////////////////////
                'MySQL': ['Experience creating simple and complex relational databases.', 'Designed and forward/reverse-engineered ERDs in MySQL Workbench.'],
                'PostgreSQL': ['Worked on complicated databases featuring numerous many-to-many relationships.', 'Experience with the Sequelize CLI as part of an Angular/Express full MVC app.'],
                'MongoDB': ['Have used as the database for a full MEAN stack app.', 'Experience with both standard Mongo documents as well as relationship-based Mongo databases.'],
                'Firebase': ['Experience using as a standard database for web apps and as part of an iOS game.', 'Used for data storage and for user registration/authentication.'],
                'Flux': ['Familiar with principle of top-down unidirectional dataflow used in React.', 'Experience using Reflux to simplify data fetching operations for simpler apps.'],
                'Redux': ['Understand the principle behind single-store concept.', 'Ability to write pure functions and properly handle the state through reducers.'],
                'CoreData': ['Experience using for basic data storage on apps.', 'Created single and multi-entity/attribute databases.'],
                'Ajax/API': ['Ability to make Ajax calls to APIs to fetch and handle data across multiple platforms/languages.', 'Experience working with multiple APIs at once.', 'Have created a simple API server to serve data to a different part of an app.']
            };

        var technoStyle = {
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
            techniStyle = {
                fontFamily: 'Baumans',
                textShadow: '1px 1px 4px black',
                textAlign: 'center',
                fontSize: '0.8em',
                margin: '0 auto'
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
            <div>
                <div className='row'>
                    <h1 style={headerStyle}>Technologies</h1>
                    <div className='col-xs-12' onMouseOver={this.hovered} onMouseOut={this.hoverLeft}>
                        {techs[this.props.skName].map(function(tech){
                            return (
                                <div className='col-xs-3' style={{minWidth: '220px'}} key={Date.now() / 1000 + tech.name}>
                                    <div className='row aimHere' style={technoStyle}>
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
                </div>
                <div className='row'>
                    <h1 style={headerStyle}>Techniques</h1>
                    <div style={techniStyle}>
                        <ReactCSSTransitionGroup transitionName="techItem" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionLeave={false}>
                        {techniques[this.state.picked].map(function(line){
                            return (
                                <span style={{display: 'block'}} key={Date.now()/1000+line}>
                                    {line}
                                </span>
                            );
                        })}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SkillDisplay;
