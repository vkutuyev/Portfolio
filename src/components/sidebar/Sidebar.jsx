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
                <SideLinks />
            </div>
        )
    }
});

module.exports = Sidebar;
