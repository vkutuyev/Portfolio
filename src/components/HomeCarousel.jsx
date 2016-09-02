var React = require('react');
var Slider = require('react-slick');


var HomeCarousel = React.createClass({
    render: function() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            fade: true,
            speed: 3000
        };
        return (
            <Slider {...settings} >
                <img className='mainHeadImg' src='img/homeCaro/SFShadow.png' alt="BG"  />
                <img src='img/homeCaro/MuffMitzi.png' alt="BG"  />
                <img src='img/homeCaro/sofmuff.png' alt="BG"  />
            </Slider>
        );
    }
});

module.exports = HomeCarousel;
