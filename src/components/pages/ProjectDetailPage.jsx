var React = require('react');

var ProjectDetailPage = React.createClass({
    render: function() {

        var projects = {
                '': {
                    'desc': '',
                    'tech': '',
                    'img': ''
                },
                'Letters4Animals': {
                    'desc': 'L4A description',
                    'tech': 'HTML, CSS, API',
                    'img': 'l4alogo.png'
                },
                'CodeBoard' : {
                    'desc': 'CodeBoard desc',
                    'tech': 'HTML5 Canvas, jQuery',
                    'img': 'codeBoardLogo.png'
                }
            };

        return (
            <div>
                <h1>Project:</h1>
                <div className='col-xs-12'>
                    <h1>Name: {this.props.projName}</h1>
                    <h1>Description: {projects[this.props.projName].desc}</h1>
                    <h1>Tech Used: {projects[this.props.projName].tech}</h1>
                </div>

            </div>
        );
    }
})

module.exports = ProjectDetailPage;
