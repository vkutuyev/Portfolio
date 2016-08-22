var React = require('react');
var Sidebar = require('../sidebar/Sidebar.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var BasePage = React.createClass({
    render: function() {

        var sideStyle = {
                height: window.innerHeight,
                color: 'white',
                background: '#003399',
                padding: '25',
                minWidth: '155'
            },
            mainStyle = {
                minWidth: '25'
            };

        return (
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='col-xs-3' style={sideStyle} id='sideWindow'>
                        <Sidebar />
                    </div>
                    <div className='col-xs-9' style={mainStyle} id='contentWindow'>
                        {this.props.children}
                    </div>
                {/* </div> */}
            </div>
        );
    }
});

module.exports = BasePage;
