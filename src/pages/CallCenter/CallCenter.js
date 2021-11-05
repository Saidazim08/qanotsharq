import React from 'react'
import { Link } from 'react-router-dom'

function CallCenter() {
    return (
        <>
            <div className="container callcenter">
                <p className="small"><Link to="/">Главная</Link><span>Call Center</span> </p>
                <div>
                    <h2>Call Center</h2>
                </div>
            </div>
        </>
    )
}

export default CallCenter
