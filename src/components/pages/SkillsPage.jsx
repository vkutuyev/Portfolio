var React = require('react');
var DesignSkill = require('./DesignSkill.jsx');
var DevSkill = require('./DevSkill.jsx');
var DataSkill = require('./DataSkill.jsx');

var SkillsPage = React.createClass({
    getInitialState: function() {
        return {textFixed: false, midText: '{this.props.linkTetx}', dataHover: false, cursorBlink: false, typeFinish: false};
    },
    typingFix: function() {
        if(!this.state.textFixed){
            this.state.textFixed = true;
            this.refs.devBox.innerHTML += '|';
            var count = 0;
            var timer = setInterval(function() {
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
                    if(text == '{this.props.linkTet|'){
                        clearInterval(timer);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.linkTex|'}.bind(this), 150);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.linkText|'}.bind(this), 300);
                        setTimeout(function(){this.refs.devBox.innerHTML = '{this.props.linkText}|'}.bind(this), 450);
                        setTimeout(function(){this.refs.devBox.innerHTML = 'Development';this.state.typeFinish=true;}.bind(this), 1000);
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
                if(text != 'Database...'){
                    this.refs.datBox.innerHTML += '.';
                }
                else{
                    this.refs.datBox.innerHTML = 'Database';
                }
            }
            else{
                clearInterval(loop);
                this.refs.datBox.innerHTML = 'Database';
            }
        }.bind(this), 250);
    },
    dataAnimStop: function() {
        this.state.dataHover = false;
    },
    clickedDes: function(){
        for(var ref in this.refs){
            if(ref[ref.length-1] == '1'){
                this.refs[ref].style.display = 'none';
                this.refs[ref].style.visibility = 'hidden';
            }
        }
        this.refs.design1.style.display = 'block';
        this.refs.design1.style.visibility = 'visible';
        this.refs.desBox.style.height = '100px';
        this.refs.devBox.style.height = '80px';
        this.refs.datBox.style.height = '80px';
        this.state.clickedLink = 'des';

    },
    clickedDev: function(){
        for(var ref in this.refs){
            if(ref[ref.length-1] == '1'){
                this.refs[ref].style.display = 'none';
                this.refs[ref].style.visibility = 'hidden';
            }
        }
        this.refs.develop1.style.display = 'block';
        this.refs.develop1.style.visibility = 'visible';
        this.refs.desBox.style.height = '80px';
        this.refs.devBox.style.height = '100px';
        this.refs.datBox.style.height = '80px';
        this.state.clickedLink = 'dev';
    },
    clickedDat: function(){
        for(var ref in this.refs){
            if(ref[ref.length-1] == '1'){
                this.refs[ref].style.display = 'none';
                this.refs[ref].style.visibility = 'hidden';
            }
        }
        this.refs.data1.style.display = 'block';
        this.refs.data1.style.visibility = 'visible';
        this.refs.desBox.style.height = '80px';
        this.refs.devBox.style.height = '80px';
        this.refs.datBox.style.height = '100px';
        this.state.clickedLink = 'dat';
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
                display: 'block',
                marginTop: '10%',
                textShadow: '1px 1px 2px black',
                fontFamily: 'Righteous'
            };


        return (
            <div>
                <div className='skillsHeader row' style={headerRowStyle}>
                    <div className='col-xs-4 leftHeaderBtn' style={headerBtnStyle}
                    onMouseDown={this.clickedDes} ref='desBox'>
                        <span>Design</span>
                    </div>
                    <div className='col-xs-4 midHeaderBtn' style={headerBtnStyle}
                    onMouseDown={this.clickedDev} onMouseOver={this.typingFix} onMouseOut={this.typingStop} ref='devBox'>
                        {this.state.midText}
                    </div>
                    <div className='col-xs-4 rightHeaderBtn' style={headerBtnStyle}
                    onMouseDown={this.clickedDat} onMouseOver={this.dataAnim} onMouseOut={this.dataAnimStop} ref='datBox'>
                        Database
                    </div>
                </div>

                <div className='row' style={defaultStyle} ref='default1'>
                    <h1>Select Category</h1>
                </div>
                <div style={{padding: '25'}}>
                    <div className='row' style={{visibility: 'hidden'}} ref='design1'>
                        <DesignSkill />
                    </div>
                    <div className='row' style={{visibility: 'hidden'}} ref='develop1'>
                        <DevSkill />
                    </div>
                    <div className='row' style={{visibility: 'hidden'}} ref='data1'>
                        <DataSkill />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SkillsPage;
