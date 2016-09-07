var React = require('react');
var Sidebar = require('../sidebar/Sidebar.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var BasePage = React.createClass({
    render: function() {

        var sideStyle = {
                color: 'white',
                background: '#003399',
                padding: '25',
                minWidth: '155',
                position: 'fixed'
            },
            mainStyle = {
                minWidth: '25'
            };

        return (
            <div className='container'>
                    <div className='col-xs-3' style={sideStyle} id='sideWindow'>
                        <Sidebar />
                    </div>
                    <div className='col-xs-9 col-xs-offset-3' style={mainStyle} id='contentWindow'>
                        {this.props.children}
                    </div>
            </div>
        );
    }
});

module.exports = BasePage;
