var React = require('react');


var ResumeList = React.createClass({
    render: function() {

        var categories = {
                'Languages': ['PHP', 'JavaScript', 'Python', 'Swift', 'HTML', 'CSS'],
                'Frameworks': ['CodeIgniter', 'AngularJS', 'Express.js', 'React', 'Django', 'Bootstrap'],
                'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Google Firebase', 'Swift Core Data', 'React Flux/Reflux'],
                'DevOps': ['Node.js', 'AWS EC2', 'AWS Lambda', 'Nginx', 'PM2', 'Ubuntu'],
                'Software': ['MySQL Workbench', 'Xcode', 'Adobe Photoshop, Premiere, After Effects, Audition', 'Microsoft Office', 'Git']
            };

        var liStyle = {
            fontSize: '0.8em'
        };

        return (
            <div className='col-xs-6'>
                <ul style={{textAlign: 'left', fontSize: '0.5em'}}>
                    <lh style={{textDecoration: 'underline', color: 'yellow'}}>{this.props.category}:</lh>
                    {categories[this.props.category].map(function(item){
                        return (
                            <li style={liStyle} key={item}>{item}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = ResumeList;
