
import './caourselStyle.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const CarouselComponent = () => {

    const settings = {
        showArrows: true,
        interval: 3500,
        dynamicHeight: false,
        stopOnHover: false,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 500,
        showThumbs: false,
        showIndicators: true,
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
    };


    return (
        <div className="carousel-container">
        <Carousel {...settings}>
                <div>
                    <img src="src/assets/Img/mont.png" />
                </div>
                <div>
                    <img src="src/assets/Img/foot.png" />
                </div>
                <div>
                    <img src="src/assets/Img/nature.png" />
                </div>
            </Carousel>
        </div>
    );
};
