import {connect} from "react-redux"
import Component from "./Component"
import {setIndexSlide} from "../../actions/actions";

const mapStateToProps = (state) => {
    return {
        countSlides: state.slider.countSlides,
    }
}

const connector = connect(mapStateToProps, {setIndexSlide})(Component)
export default connector
