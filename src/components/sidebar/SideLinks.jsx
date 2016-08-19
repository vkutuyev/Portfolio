var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SideLinkItem = require('./SideLinkItem.jsx');

var SideLinks = React.createClass({
    render: function() {

        var linkStyle = {
                textDecoration: 'none'
            },
            iconStyle = {
                textAlign: 'center',
                color: 'yellow',
                display: 'block',
                marginBottom: '25',
                fontSize: '2em'
            };

        return (
            <div id='sideLinks'>
                <Link to='/' style={linkStyle}>
                    <i className="fa fa-3x fa-home" aria-hidden="true" style={iconStyle}></i>
                </Link>
                <SideLinkItem href='projects' text='Projects'/>
                <SideLinkItem href='skills' text='Skills'/>
                <SideLinkItem href='resume' text='Resume'/>
                <SideLinkItem href='about' text='About'/>
            </div>
        );
    }
});

module.exports = SideLinks;
