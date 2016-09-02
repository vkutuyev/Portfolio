var React = require('react');
var SideHeader = require('./SideHeader.jsx');
var SideLinks = require('./SideLinks.jsx');


var Sidebar = React.createClass({
    render: function() {

        var sidebarStyle = {
            zIndex: '-1'
        };

        return (
            <div style={sidebarStyle} id='sideBar'>
                <SideHeader />
                <img src='img/Separator.png' alt="sep" style={{width: '100%', marginBottom: '25px'}} />
                <SideLinks />
            </div>
        )
    }
});

module.exports = Sidebar;
