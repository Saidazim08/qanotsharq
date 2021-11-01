import React from 'react'
import "./Main.css"
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import Tabs from "../../Components/Tabs/Tabs"
import Way from '../../Components/Way/Way'
import News from '../../Components/News/News'
import WorldMap from '../../Components/WorldMap/WorldMap'
import Services from '../../Components/Services/Services'

function Main() {
    return (
        <div>
            <MainCarousel />
            <div className="section-2">
                <Tabs />
                <Way />
            </div>
            <div className="section-3 py-5">
                <News />
            </div>
            <div className="section-4">
            </div>
            <div className="section-5">
                <Services/>
            </div>
        </div >
    )
}

export default Main
