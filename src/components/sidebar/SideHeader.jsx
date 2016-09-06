var React = require('react');
var LargeIcon = require('./LargeIcon.jsx');
var SmallIcon = require('./SmallIcon.jsx');


var SideHeader = React.createClass({
    getInitialState: function(){
        return {nameDisp: 'Vadim Kutuyev'};
    },
    nameRus: function(){
        this.setState({nameDisp: '​‌В​‌ад​‌им Кутуев'});
    },
    nameEng: function(){
        this.setState({nameDisp: 'Vadim Kutuyev'});
    },
    render: function(){

        var headerStyle = {
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                fontFamily: 'Poiret One',
                wordWrap: 'break-word',
                marginBottom: '25',
                minHeight: '265'
            },
            nameStyle = {
                marginBottom: '15'
            },
            lighlinksStyle = {
                padding: 0
            },
            stickerStyle = {
                margin: '0 auto'
            };

        return (
            <div style={headerStyle} id='sideHeader' className='row'>
                <div id='profilePic' className='profile example-1' style={stickerStyle}></div>
                <div className='row' style={nameStyle}>
                    <h1 className='sideNameFull' onMouseOver={this.nameRus} onMouseOut={this.nameEng}>{this.state.nameDisp}</h1>
                    <h1 className='sideNameShort'>V.K.</h1>
                </div>
                <div className='row lighlinksFull' style={lighlinksStyle}>
                    <LargeIcon href='https://www.linkedin.com/in/vkutuyev' img='linkedLogo' alt='LinkedIn' />
                    <LargeIcon href='mailto:contact@vkutuyev.com' img='gmailLogo' alt='Email' />
                    <LargeIcon href='https://github.com/vkutuyev' img='githubLogo' alt='GitHub' />
                </div>
                <div className='lighlinksShort'>
                    <SmallIcon href='https://www.linkedin.com/in/vkutuyev' img='linkedLogo' alt='LinkedIn' />
                    <SmallIcon href='mailto:contact@vkutuyev.com' img='gmailLogo' alt='Email' />
                    <SmallIcon href='https://github.com/vkutuyev' img='githubLogo' alt='GitHub' />
                </div>
            </div>
        );
    }
});

module.exports = SideHeader;
