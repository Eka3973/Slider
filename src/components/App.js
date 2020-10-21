import React, {useEffect, useState} from 'react'
import './app.module.scss';
import Slider from "./Slider";
import Scrolling from "./Scrolling";
import style from './app.module.scss';
import {breakpoints} from "../store/resize";

const App = () => {
    const [mobile, setMobile] = useState({width: window.innerWidth})
    const isMobile = mobile.width <= breakpoints.mobile

    useEffect(() => {
        const handleResize = () => {
            setMobile({width: window.innerWidth})
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)

        }
    })

    return (
        <div className={style.container}>
            <Slider isMobile={isMobile}/>
            {!isMobile && <Scrolling/>}
        </div>
    )

}
export default App
