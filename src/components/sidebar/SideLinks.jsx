var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SideLinkItem = require('./SideLinkItem.jsx');

var SideLinks = React.createClass({
    getInitialState: function() {
        return {hover: false};
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    clicked: function(event) {
        var url = window.location.pathname,
            page = url.substring(1,url.length);

        for(ref in this.refs){
            if(page == ref){
                this.refs[ref].clickedThis();
            }
            else{
                this.refs[ref].clickedOther();
            }
        }
    },
    render: function() {

        var linkStyle = {
                textDecoration: 'none'
            },
            iconStyle = {
                textAlign: 'center',
                color: '#F4C842',
                display: 'block',
                marginBottom: '25',
                fontSize: '2em',
                textShadow: this.state.hover ? '0 0 20px black' : ''
            };

        return (
            <div id='sideLinks' onClick={this.clicked}>
                <Link to='/' style={linkStyle}>
                    <i className="fa fa-3x fa-home" aria-hidden="true" style={iconStyle}
                    onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></i>
                </Link>
                <SideLinkItem href='projects' ref='projects' text='&nbsp;&nbsp;Projects&nbsp;&nbsp;' icon='fa-cogs' />
                <SideLinkItem href='skills' ref='skills' text='&nbsp;&nbsp;Skills&nbsp;&nbsp;' icon='fa-code' />
                <SideLinkItem href='resume' ref='resume' text='&nbsp;&nbsp;Résumé&nbsp;&nbsp;' icon='fa-file-text-o' />
                <SideLinkItem href='about' ref='about' text='&nbsp;&nbsp;About&nbsp;&nbsp;' icon='fa-user' />
            </div>
        );
    }
});

module.exports = SideLinks;
