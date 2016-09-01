var React = require('react');
var SkillDisplay = require('./SkillDisplay.jsx');


var SkillsPage = React.createClass({
    getInitialState: function() {
        return {textFixed: false, midText: '{this.props.midTetx}', dataHover: false, cursorBlink: false, typeFinish: false, picked: false, pickedSkill: ''};
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    typingFix: function() {
        if(!this.state.textFixed){
            this.state.textFixed = true;
            this.refs.devBox.innerHTML += '|';
            var count = 0;
            this.timer = setInterval(function() {
                var text = this.refs.devBox.innerHTML;
                if(count < 4){
                    if(text[text.length-1] == '|') {
                        this.refs.devBox.innerHTML = text.substring(0, text.length-1);
                    }
                    else {
                        this.refs.devBox.innerHTML += '|';
                    }
                    count++;
                }
                else {
                    this.refs.devBox.innerHTML = text.substring(0,text.length-2);
                    this.refs.devBox.innerHTML += '|';
                    if(text == '{this.props.midTet|'){
                        clearInterval(this.timer);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.midTex|'}.bind(this), 150);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.midText|'}.bind(this), 300);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.midText}|'}.bind(this), 450);
                        setTimeout(function(){this.refs.devBox.innerHTML = 'Development';this.state.typeFinish=true;}.bind(this), 1500);
                    }
                }
            }.bind(this), 300);
        }
        else{
            if(this.state.typeFinish){
                this.state.cursorBlink = true;
                var blink = setInterval(function(){
                    if(this.state.cursorBlink){
                        if(this.refs.devBox.innerHTML[this.refs.devBox.innerHTML.length-1] == '|'){
                            this.refs.devBox.innerHTML = this.refs.devBox.innerHTML.substring(0, this.refs.devBox.innerHTML.length-1);
                        }
                        else{
                            this.refs.devBox.innerHTML += '|';
                        }
                    }
                    else {
                        this.refs.devBox.innerHTML = 'Development';
                        clearInterval(blink);
                    }
                }.bind(this), 500);
            }
        }
    },
    typingStop: function() {
        this.state.cursorBlink = false;
    },
    dataAnim: function() {
        this.state.dataHover = true;
        var loop = setInterval(function(){
            if(this.state.dataHover){
                var text = this.refs.datBox.innerHTML;
                if(text != 'Data...'){
                    this.refs.datBox.innerHTML += '.';
                }
                else{
                    this.refs.datBox.innerHTML = 'Data';
                }
            }
            else{
                clearInterval(loop);
                this.refs.datBox.innerHTML = 'Data';
            }
        }.bind(this), 250);
    },
    dataAnimStop: function() {
        this.state.dataHover = false;
    },
    clicked: function(btn) {
        for(var ref in this.refs){
            if(ref[ref.length-1] == 'x'){
                this.refs[ref].style.height = '80px';
            }
        }
        this.refs[btn.box].style.height = '100px';
        this.setState({picked: true});
        this.setState({pickedSkill: btn.skill});
    },
    render: function() {

        var headerRowStyle = {
                width: '100%',
                margin: 0
            },
            headerBtnStyle = {
                display: 'inline-block',
                backgroundColor: 'rgb(185, 193, 180)',
                color: 'white',
                lineHeight: '80px',
                height: '80px',
                verticalAlign: 'middle',
                textAlign: 'center',
                fontFamily: 'Righteous'
            },
            defaultStyle = {
                textAlign: 'center',
                display: this.state.picked ? 'none':'block',
                marginTop: '10%',
                textShadow: '1px 1px 2px black',
                fontFamily: 'Righteous'
            },
            skillStyle = {
                display: this.state.picked ? 'block':'none',
                marginTop: '50'
            };

        return (
            <div>
                <div className='skillsHeader row' style={headerRowStyle}>
                    <div className='col-xs-4 leftHeaderBtn' style={headerBtnStyle}
                    onClick={this.clicked.bind(this, {box: 'desBox', skill: 'design'})} ref='desBox'>
                        <span>Design</span>
                    </div>
                    <div className='col-xs-4 midHeaderBtn' style={headerBtnStyle}
                    onClick={this.clicked.bind(this, {box: 'devBox', skill: 'dev'})} ref='devBox'
                    onMouseOver={this.typingFix} onMouseOut={this.typingStop}>
                        {this.state.midText}
                    </div>
                    <div className='col-xs-4 rightHeaderBtn' style={headerBtnStyle}
                    onClick={this.clicked.bind(this, {box: 'datBox', skill: 'data'})} ref='datBox'
                    onMouseOver={this.dataAnim} onMouseOut={this.dataAnimStop}>
                        Data
                    </div>
                </div>

                <div className='row' style={defaultStyle} ref='default1'>
                    <h1>Select Category</h1>
                </div>
                <div className='col-xs-12' style={skillStyle}>
                    <SkillDisplay skName={this.state.pickedSkill} />
                </div>
            </div>
        );
    }
});

module.exports = SkillsPage;
