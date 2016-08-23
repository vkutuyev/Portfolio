var React = require('react');
var ProjectDetailPage = require('./ProjectDetailPage.jsx');

var ProjectPage = React.createClass({
    getInitialState: function() {
        return {clicked: false, project: ''};
    },
    clickedLink: function(link) {
        this.setState({clicked: true});
        this.setState({project: link});
    },
    render: function() {

        var mainStyle = {
                padding: '25'
            },
            headerStyle = {
                height: '35vh',
                background: 'rgb(193, 110, 25)',
                marginBottom: '25'
            },
            projectStyle = {
                height: '50vh',
                backgroundColor: this.state.clicked ? 'rgb(76, 215, 121)' : 'black',
                padding: '25',
                display: 'block'
            };

        return (
            <div style={mainStyle}>
                <div style={headerStyle} className='row'>
                    <div className='col-xs-6' onClick={this.clickedLink.bind(this, 'Letters4Animals')}>
                        <img src='http://lorempixel.com/900/500/' alt='Pic1' width='100%'/>
                    </div>
                    <div className='col-xs-6' onClick={this.clickedLink.bind(this, 'CodeBoard')}>
                        <img src='http://lorempixel.com/900/500/' alt='Pic2' width='100%'/>
                    </div>
                </div>
                <div style={projectStyle} className='row'>
                    <ProjectDetailPage projName={this.state.project} />
                </div>
            </div>
        );
    }
});

module.exports = ProjectPage;
