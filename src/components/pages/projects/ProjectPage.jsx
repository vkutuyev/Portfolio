var React = require('react');
var ProjectHeaderItem = require('./ProjectHeaderItem.jsx');
var ProjectDetail = require('./ProjectDetail.jsx');


var ProjectPage = React.createClass({
    getInitialState: function() {
        return {clicked: false, project: ''};
    },
    clickedLink: function(link) {
        this.setState({clicked: true});
        this.setState({project: link});
        for(var ref in this.refs){
            if(ref == link){
                this.refs[link].clickedThis(link);
            }
            else {
                this.refs[ref].clickedOther();
            }
        }
    },
    render: function() {

        var mainStyle = {
                paddingLeft: '25',
                paddingRight: '25',
                fontFamily: 'Righteous'
            },
            headerStyle = {
                height: '20vh',
                marginBottom: '15'
            },
            projectStyle = {
                height: '55vh',
                padding: '25',
                display: this.state.clicked ? 'block' : 'none'
            },
            defaultStyle = {
                margin: '50px auto 0px auto',
                textAlign: 'center',
                textShadow: '1px 1px 2px black',
                display: this.state.clicked ? 'none':'block'
            };

        return (
            <div style={mainStyle}>
                <div style={headerStyle} className='row projectsHeader'>
                    <div className='col-xs-3' onClick={this.clickedLink.bind(this, 'Letters4Animals')} >
                        <ProjectHeaderItem project='Letters4Animals' ref='Letters4Animals' />
                    </div>
                    <div className='col-xs-3' onClick={this.clickedLink.bind(this, 'CodeBoard')} >
                        <ProjectHeaderItem project='CodeBoard' ref='CodeBoard'/>
                    </div>
                    <div className='col-xs-3' onClick={this.clickedLink.bind(this, 'WeatherShouldIGo')} >
                        <ProjectHeaderItem project='WeatherShouldIGo' ref='WeatherShouldIGo'/>
                    </div>
                    <div className='col-xs-3' onClick={this.clickedLink.bind(this, 'ProceduralGame')} >
                        <ProjectHeaderItem project='ProceduralGame' ref='ProceduralGame' />
                    </div>
                </div>

                <div className='row' style={defaultStyle}>
                    Select Project
                </div>

                <div style={projectStyle} className='row'>
                    <ProjectDetail projName={this.state.project} />
                </div>
            </div>
        );
    }
});

module.exports = ProjectPage;
