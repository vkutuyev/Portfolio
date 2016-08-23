var React = require('react');

var ProjectHeaderItem = React.createClass({
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
                display: 'block'
            };

        return (
            <div className='row projectHeaderBox' style={headerItemStyle}>
                <div className='col-xs-12' style={projectBoxStyle}>
                    <img src='img/test.png' width='100%' alt='Project' style={thumbStyle}/>
                </div>
                <div className='col-xs-12' style={projectLabelStyle}>
                    {this.props.project}
                </div>
            </div>
        );
    }
});

module.exports = ProjectHeaderItem;
