import React from 'react'
import style from './style.module.scss';
import PropTypes from 'prop-types';

const Slider = ({items, countSlides, setIndexSlide, startSlide, endSlide, isMobile}) => {

    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);


    const start = isMobile ? 0 : startSlide
    const end = isMobile ? 1 : endSlide

    const currentSlides = countSlides.slice(start, end)

    const next = () => {
        const shiftSlide = countSlides.shift();
        const newSlides = [...countSlides, shiftSlide]
        setIndexSlide(newSlides)
    }

    const prev = () => {
        const popSlide = countSlides.pop();
        const newSlides = [popSlide, ...countSlides]
        setIndexSlide(newSlides)
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            // moveSliderRight();
        }

        if (touchStart - touchEnd < -150) {
            // do your stuff here for right swipe
            // moveSliderLeft();
        }
    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={prev}>prev</button>
            {
                currentSlides.map((slide) =>
                    <div key={slide} className={style.slider} onTouchStart={handleTouchStart}
                         onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                        <img src={items[slide].image} alt="slide"/>
                        <span className={style.text}>{items[slide].text}</span>
                    </div>
                )
            }
            <button className={style.button} onClick={next}>next</button>
        </div>
    )

}
export default Slider


Slider.propTypes = {
    items: PropTypes.array,
    countSlides: PropTypes.array,
    setIndexSlide: PropTypes.func,
    startSlide: PropTypes.number,
    endSlide: PropTypes.number,
    isMobile: PropTypes.bool,
};
