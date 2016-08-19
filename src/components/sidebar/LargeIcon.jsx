var React = require('react');


var LargeIcon = React.createClass({
    getInitialState: function() {
        return {hover: false};
    },
    mouseOver: function(event) {
        this.setState({hover: true});
    },
    mouseOut: function(event) {
        this.setState({hover: false});
    },
    render: function() {

        var spanStyle = {
            marginTop: '10',
            fontSize: '0.5em'
        };

        return (
            <div className='col-xs-4'>
                <div className='row'>
                    <a href={this.props.href}>
                        <img src={'img/'+this.props.img+'.png'} alt={this.props.alt} width='50' height='50'
                        onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                        className={this.state.hover ? "iconHigh" : ""}/>
                    </a>
                </div>
                <div className='row' style={spanStyle}>
                    <span>{this.state.hover ? this.props.alt : ''}</span>
                </div>
            </div>
        );
    }
});

module.exports = LargeIcon;
