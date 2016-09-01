var React = require('react');


var HomePage = React.createClass({
    render: function() {

        var textStyle = {
                fontFamily: 'Baumans',
                fontSize: '1.5em',
                textShadow: '1px 1px 4px black',
                textAlign: 'center',
                marginTop: '35'
            };

        return (
            <div>
                <div className='row'>
                    <img className='mainHeadImg' src='img/SFShadow.png' alt="BG" width='100%' />
                </div>
                <div className='row' style={textStyle}>
                    <div className='col-xs-8 col-xs-offset-2 helloText'>
                        Hello.
                    </div>
                    <div className='col-xs-8 col-xs-offset-2 welcomeText'>
                        Welcome to my portfolio.
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;
