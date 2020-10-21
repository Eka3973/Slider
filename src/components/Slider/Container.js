import {connect} from "react-redux"
import Component from "./Component"
import {setIndexSlide} from "../../actions/actions";

const mapStateToProps = (state) => {
    return {
        items: state.slider.items,
        countSlides: state.slider.countSlides,
        startSlide: state.slider.startSlide,
        endSlide: state.slider.endSlide,
    }
}

const connector = connect(mapStateToProps, {setIndexSlide})(Component)
export default connector
