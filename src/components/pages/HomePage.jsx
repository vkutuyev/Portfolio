var React = require('react');
var HomeCarousel = require('../HomeCarousel.jsx');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var HomePage = React.createClass({
    getInitialState: function() {
        return {ind: 0};
    },
    componentDidMount: function() {
        var sound = document.getElementById('rimshot');
        this.cycleText = setInterval(function(){
            var newInd = 0;
            newInd = this.state.ind + 1;
            this.setState({ind: newInd});
            if(this.state.ind == 6){
                setTimeout(function(){
                    sound.play();
                }, 1500);
            }
            if(this.state.ind == 7){
                clearInterval(this.cycleText);
            }
        }.bind(this), 5000);
    },
    componentWillUnmount: function() {
        clearInterval(this.cycleText);
    },
    render: function() {

        var fakeText = ['Welcome to my portfolio.', 'I\'m not really sure what to put here.', 'Uh...let\'s see how about...', '~Inspirational Quote~', 'Hmm...no that doesn\'t seem quite right.', 'How about a joke?', 'Swift documentation is great and always helpful.', ''];

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
                    <div className='col-xs-8 col-xs-offset-2'>
                        <span className='fakeText' style={{fontSize: '0.8em', fontFamily: 'Raleway'}}>
                            {fakeText[this.state.ind]}
                        </span>
                    </div>
                </div>
                <audio id='rimshot'>
                    <source src="sound/rimshot.mp3" type="audio/mpeg" />
                </audio>
            </div>
        );
    }
});

module.exports = HomePage;
