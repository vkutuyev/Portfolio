var React = require('react');
var Sidebar = require('../sidebar/Sidebar.jsx');


var BasePage = React.createClass({
    render: function() {

        var sideStyle = {
                height: '100vh',
                color: 'white',
                background: '#0D2F7D',
                padding: '25',
                minWidth: '155'
            },
            mainStyle = {
                minWidth: '25'
            };

        return (
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='col-xs-3' style={sideStyle}>
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
