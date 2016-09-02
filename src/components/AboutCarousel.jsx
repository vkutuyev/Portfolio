var React = require('react');
var Slider = require('react-slick');

var AboutCarousel = React.createClass({
    render: function() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 0,
            arrows: false,
            speed: 7000,
            cssEase: 'linear'
        };

        var pics = [
            'meNastya',
            'arcade',
            'maze',
            'muffinMitzi',
            'naviStinar',
            'snowboard',
            'muffinSofia',
            'build',
            'medusa',
            'muffinWine',
            'wall',
            'waterfall'
        ];

        var picStyle = {
            height: '250px',
            margin: '0 auto'
        };

        return (
            <Slider {...settings}>
                {pics.map(function(pic){
                    return (
                        <div key={pic}>
                            <img src={'img/aboutCaro/'+pic+'.png'} alt='Slide' key={pic} style={picStyle} />
                        </div>
                    );
                })}
            </Slider>
        );
    }
});

module.exports = AboutCarousel;
