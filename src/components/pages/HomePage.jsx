var React = require('react');
var HomeCarousel = require('../HomeCarousel.jsx');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var HomePage = React.createClass({
    getInitialState: function() {
        return {ind: 0};
    },
    componentDidMount: function() {
        this.cycleText = setInterval(function(){
            var newInd = 0;
            if(this.state.ind == 5){
                newInd = 1;
            }
            else {
                newInd = this.state.ind + 1;
            }
            this.setState({ind: newInd});
        }.bind(this), 5000);
    },
    componentWillUnmount: function() {
        clearInterval(this.cycleText);
    },
    render: function() {

        var fakeText = ['Welcome to my portfolio.', '~Inspirational Quote~', '~Quirky Personality Trait~', "~Cool Band You've Never Heard Of~", "~That One Really Good Pho Place But Not The Really Popular One~", "~That Movie That Famous Director Made In High School For $500~"]

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
            </div>
        );
    }
});

module.exports = HomePage;
