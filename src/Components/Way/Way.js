import React from 'react'
import "../FontAwesomeIcon/index"
import './Way.css'
import first from '../../images/1st.png'
import second from '../../images/2nd.png'
import third from '../../images/3rd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Way = () => {
    return (
        <>
            <div className="container way">
                <div className="d-inline-block ps-3">
                    <p className="st-title">Популярные направления</p>
                    <p className="nd-title">Не упустите выгоду - купите билеты сейчас – летайте с нами!</p>
                </div>
                <div className="row way-items justify-content-md-center">
                    <div className="col-lg-4 d-flex flex-column position-relative justify-content-center col-md-6 p-3">
                        <img src={first} alt="?" />
                        <div className="way-items-body">
                            <span>Ташкент</span>
                            <h3 className="d-flex align-items-center justify-content-between">
                                <a href="#">Киев</a>
                                <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                            </h3>
                            <span>Прямой рейс</span>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column position-relative justify-content-center col-md-6 p-3">
                        <img src={second} alt="?" />
                        <div className="way-items-body">
                            <span>Ташкент</span>
                            <h3 className="d-flex align-items-center justify-content-between">
                                <a href="#">Москва</a>
                                <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                            </h3>
                            <span>Прямой рейс</span>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column position-relative justify-content-center col-md-6 p-3">
                        <img src={third} alt="?" />
                        <div className="way-items-body">
                            <span>Ташкент</span>
                            <h3 className="d-flex align-items-center justify-content-between">
                                <a href="#">Шарджа</a>
                                <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                            </h3>
                            <span>Прямой рейс</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Way
