import React from 'react'
import style from './style.module.scss';
import PropTypes from 'prop-types';

const Scrolling = ({countSlides, setIndexSlide}) => {

    const selectSlide = (index) => {
        const clickElem = countSlides.findIndex(elem => elem === index)
        const cutElem = countSlides.splice(clickElem)
        const newSlides = [...cutElem, ...countSlides]
        setIndexSlide(newSlides)
    }

    return (
        <div className={style.wrapper}>
            {countSlides.map((slide, index) =>
                <button key={slide} className={style.button}
                        onClick={() => selectSlide(index)}>{index + 1}
                </button>)}
        </div>
    )
}

export default Scrolling


Scrolling.propTypes = {
    countSlides: PropTypes.array,
    setIndexSlide: PropTypes.func,
};
