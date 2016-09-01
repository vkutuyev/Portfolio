var React = require('react');

var ProjectHeaderItem = React.createClass({
    getInitialState: function() {
        return {clicked: false};
    },
    hovAnimate: function(e) {
        if(!this.state.clicked){
            e.target.src = 'img/projects/' + this.props.project + '.gif';
            this.refs.projLabel.style.backgroundColor = 'rgb(108, 106, 107)';
        }
        else{
            e.target.src = 'img/projects/' + this.props.project + '.png';
        }
    },
    stopAnimate: function(e) {
        e.target.src = 'img/projects/' + this.props.project + '.png';
        if(!this.state.clicked){
            this.refs.projLabel.style.backgroundColor = 'rgb(185, 193, 180)';
        }
    },
    clickedThis: function(link) {
        this.setState({clicked: true});
        this.refs.projLabel.style.color = 'rgb( 0, 153, 204)';
        this.refs.projLabel.style.backgroundColor = 'rgb(108, 106, 107)';
    },
    clickedOther: function() {
        this.setState({clicked: false});
        this.refs.projLabel.style.color = 'white';
        this.refs.projLabel.style.backgroundColor = 'rgb(185, 193, 180)';
    },
    render: function() {

        var headerItemStyle = {
                height: '160px',
                textAlign: 'center',
                boxShadow: '0px 0px 2px black',
                border: '1px solid black',
                borderBottomLeftRadius: this.props.project == 'Letters4Animals' ? '25':'0',
                borderBottomRightRadius: this.props.project == 'ProceduralGame' ? '25':'0'
             },
            projectBoxStyle = {
                height: '120px',
                fontSize: '1em',
                background: 'blue',
                margin: 0,
                padding: 0
            },
            projectLabelStyle = {
                height: '40px',
                minHeight: '40px',
                lineHeight: '40px',
                fontSize: '0.6em',
                verticalAlign: 'middle',
                backgroundColor: 'rgb(185, 193, 180)',
                color: 'white',
                textShadow: '1px 1px 2px black',
                borderBottom: '1px solid black',
                borderBottomLeftRadius: this.props.project == 'Letters4Animals' ? '25':'0',
                borderBottomRightRadius: this.props.project == 'ProceduralGame' ? '25':'0'
            },
            thumbStyle = {
                margin: 'auto auto',
                display: 'block',
                maxHeight: '120px'
            };

        return (
            <div className='row projectHeaderBox' style={headerItemStyle}>
                <div className='col-xs-12 projectHeaderImage' style={projectBoxStyle}>
                    <img src={'img/projects/'+this.props.project+'.png'} width='100%' height='auto' alt='Project' style={thumbStyle} onMouseOver={this.hovAnimate} onMouseOut={this.stopAnimate} />
                </div>
                <div className='col-xs-12' style={projectLabelStyle} ref='projLabel'>
                    {this.props.project}
                </div>
            </div>
        );
    }
});

module.exports = ProjectHeaderItem;
