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
            <Slider {...settings}>
                <div>
                    <img className='mainHeadImg' src='img/homeCaro/SFShadow.png' alt="BG" width='100%' />
                </div>
                <div>
                    <img src='img/homeCaro/MuffMitzi.png' alt="BG" width='100%' />
                </div>
                <div>
                    <img src='img/homeCaro/sofmuff.png' alt="BG" width='100%' />
                </div>
            </Slider>
        );
    }
});

module.exports = HomeCarousel;
