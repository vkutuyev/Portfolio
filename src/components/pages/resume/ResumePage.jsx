var React = require('react');
var ResumeList = require('./ResumeList.jsx');
var ProjectList = require('./ProjectList.jsx');


var ResumePage = React.createClass({
    render: function() {

        var mainStyle = {
                textShadow: '1px 1px 4px black',
                fontFamily: 'Baumans',
                marginTop: '2%',
                marginBottom: '2%'

            },
            nameStyle = {
                textAlign: 'center',
                fontSize: '1em'
            },
            infoStyle = {
                textAlign: 'center',
                fontSize: '0.7em',
                verticalAlign: 'middle'
            },
            sepStyle = {
                textAlign: 'center',
                color: 'yellow',
                verticalAlign: 'middle'
            },
            eduexpTextStyle = {
                fontSize: '0.5em'
            };

        return (
            <div style={mainStyle} id='resumePage'>
                <div className='row'>
                    <div className='col-xs-4 col-xs-offset-4' style={nameStyle}>
                        <span>Vadim Kutuyev</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-8 col-xs-offset-2'>
                        <div style={{width: '100%', textAlign: 'center', lineHeight: '80%'}}>
                            <span style={infoStyle}>San Jose, CA</span>
                            <span style={sepStyle}>&nbsp;&nbsp;||&nbsp;&nbsp;</span>
                            <span style={infoStyle}>(949) 292 - 7463</span>
                            <span style={sepStyle}>&nbsp;&nbsp;||&nbsp;&nbsp;</span>
                            <span style={infoStyle}>vkutuyev@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='row' style={{marginBottom: '30px'}}>
                    <div className='col-xs-8 col-xs-offset-2'>
                        <div style={{width: '100%', textAlign: 'center', lineHeight: '80%'}}>
                            <span style={infoStyle}><a href='http://github.com/vkutuyev' target='_blank' style={{textDecoration: 'none', color: 'white'}}>github.com/vkutuyev/</a></span>
                            <span style={sepStyle}>&nbsp;&nbsp;||&nbsp;&nbsp;</span>
                            <span style={infoStyle}><a href='http://linkedin.com/in/vkutuyev' target='_blank' style={{textDecoration: 'none', color: 'white'}}>linkedin.com/in/vkutuyev</a></span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-4' style={{textAlign: 'center'}}>
                        <h3>Skills</h3>
                        <div className='row'>
                            <ResumeList category='Languages' />
                            <ResumeList category='Frameworks' />
                        </div>
                        <div className='row'>
                            <ResumeList category='Databases' />
                            <ResumeList category='DevOps' />
                        </div>
                        <div className='row'>
                            <ResumeList category='Software' />
                        </div>
                    </div>
                    <div className='col-xs-7' style={{marginLeft: '25px'}}>
                        <h3 style={{textAlign: 'center'}}>Projects</h3>
                        <ProjectList project='L4A'/>
                        <ProjectList project='CodeBoard' />
                        <ProjectList project='Procedural' />
                    </div>
                </div>
                <div className='row' style={{textAlign: 'center', marginTop: '25px'}}>
                    <div className='col-xs-5 col-xs-offset-1'>
                        <h3>Education</h3>
                        <div className='row' style={{textAlign: 'left', marginLeft: '10px'}}>
                            <h4 style={{color: 'yellow'}}>Coding Dojo</h4>
                            <h5 style={{margin: 0}}>Double Black Belt</h5>
                            <h5 style={{marginTop: 0}}>San Jose, CA&nbsp;&nbsp;&nbsp;&nbsp;March 2016 - July 2016</h5>
                            <p style={eduexpTextStyle}>14-week immersive coding boot camp requiring over 1000 hours to retain proficient web development skills. Gained proficiency in various web development aspects for multiple stacks. This focused education provided a means to obtain the skills necessary to deploy a full website from client to server to database while acquiring the knowledge and skills for a full stack developer.</p>
                        </div>
                        <div className='row' style={{textAlign: 'left', marginLeft: '10px'}}>
                            <h4 style={{color: 'yellow'}}>University of California - Los Angeles</h4>
                            <h5>Los Angeles, CA&nbsp;&nbsp;&nbsp;&nbsp;Sept 2004 - Jan 2006</h5>
                            <p style={eduexpTextStyle}>Admitted and enrolled as Computer Science major.</p>
                        </div>
                    </div>
                    <div className='col-xs-5'>
                        <h3>Experience</h3>
                        <div className='row' style={{textAlign: 'left', marginLeft: '10px'}}>
                            <h4 style={{color: 'yellow'}}>Scrum Developer</h4>
                            <h5 style={{margin: 0}}>FMFA, Inc.</h5>
                            <h5 style={{marginTop: 0}}>San Jose, CA&nbsp;&nbsp;&nbsp;&nbsp;July 2016</h5>
                            <p style={eduexpTextStyle}>Worked as an unpaid contract developer in a full Scrum development team of 7 people to deliver a fully-functional website to a very happy customer on time after having only one month to go from design to deployment. Was mostly responsible for connecting the front-end to the back-end API and database calls, as well as implementing the functionality to let users save pre-formatted/populated letters to their computers or print them out from the website directly. Also often took charge of communication between team members in order to maintain a smooth development process and coordinate between members who were working from home and those who were present locally.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ResumePage;
