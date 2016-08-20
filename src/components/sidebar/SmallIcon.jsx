var React = require('react');


var SmallIcon = React.createClass({
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
        return (
            <div className='row smallIcon'>
                <a href={this.props.href} target="_blank">
                    <img src={'img/'+this.props.img+'.png'} alt={this.props.alt} width='35' height='35'
                    onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                    className={this.state.hover ? "iconHigh" : ""}/>
                </a>
            </div>
        );
    }
});

module.exports = SmallIcon;
