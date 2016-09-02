var React = require('react');
var HomeCarousel = require('../HomeCarousel.jsx');


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
                <HomeCarousel />
                <div className='row' style={textStyle}>
                    <img src='img/Separator.png' alt="sep" style={{marginBottom: '25px'}}/>
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
