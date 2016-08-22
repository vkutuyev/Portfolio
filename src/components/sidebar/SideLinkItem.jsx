var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var SideLinkItem = React.createClass({
    getInitialState: function() {
        return {clicked: false};
    },
    clickedThis: function() {
        this.setState({clicked: true});
    },
    clickedOther: function() {
        this.setState({clicked: false});
    },
    render: function() {

        var rowStyle = {
                fontFamily: 'Baumans'
            },
            linkStyle = {
                textDecoration: 'none',
                color: this.state.clicked ? 'white' : '#66CCFF'
            },
            iconStyle = {
                textAlign: 'center',
                verticalAlign: 'bottom',
                background: '#FFB347',
                color: 'black',
                marginLeft: '10%'
            };

        return (
            <div className='row' style={rowStyle}>
                <Link to={'/'+this.props.href} style={linkStyle}>
                    <div className='sideItemIcon col-xs-3' style={iconStyle}>
                        <i className={"fa "+this.props.icon} aria-hidden="true"></i>
                    </div>
                </Link>
                <Link testThing='Test' className={'sideItemText' + (this.state.clicked ? '' : ' roll')} to={'/'+this.props.href} style={linkStyle}>
                    {this.props.text}
                </Link>
            </div>
        );
    }
});

module.exports = SideLinkItem;
