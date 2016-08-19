var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var SideLinkItem = React.createClass({
    getInitialState: function() {
        return {hover: false};
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    render: function() {

        var divStyle = {
                textAlign: 'center',
                marginBottom: '25px',
                fontFamily: 'Baumans'
            },
            linkStyle = {
                textDecoration: 'none',
                color: this.state.hover ? "yellow" : "#153e9d"
            };

        return (
            <div className='sideItem' style={divStyle}>
                <Link to={'/'+this.props.href} style={linkStyle}
                onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    {this.props.text}
                </Link>
            </div>
        );
    }
});

module.exports = SideLinkItem;
