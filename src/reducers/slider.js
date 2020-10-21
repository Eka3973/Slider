import data from "../store/data";
import {SET_INDEX_SLIDE} from '../actions/constants'


const slides = data.items.map((slide, index) => index)

const initState = {
    items: data.items,
    countSlides: slides,
    startSlide: 0,
    endSlide: 3,

}

const commonReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INDEX_SLIDE: {
            return {
                ...state,
                countSlides: action.newSlides
            }
        }
        default:
            return state;
    }

}
export default commonReducer

