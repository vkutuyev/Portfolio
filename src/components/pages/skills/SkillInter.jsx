var React = require('react');
var SkillDisplay = require('./SkillDisplay.jsx');


var SkillInter = React.createClass({
    render: function() {

        var catStyle = {
                minHeight: '35vh'
            },
            headerStyle = {
                textAlign: 'center',
                textShadow: '1px 1px 4px black',
                marginBottom: '25',
                fontFamily: 'Righteous'
            }

        return (
            <div>
                <div className='row' style={catStyle}>
                    <h1 style={headerStyle}>Technologies</h1>
                    <SkillDisplay skName={this.props.skName} />
                </div>

                <div className='row'>
                    <h1 style={headerStyle}>Techniques</h1>
                    {/* <h4>{this.state.picked}</h4> */}
                </div>
            </div>
        );
    }
});

module.exports = SkillInter;
