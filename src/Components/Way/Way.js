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
                    <div className="way-items-in col-lg-4 col-md-6">
                        <div className="position-relative">
                            <img src={third} alt="?" />
                            <div className="px-3">
                                <div className="way-items-body">
                                    <span className="small">Ташкент</span>
                                    <h5>
                                        <a className="d-flex align-items-center justify-content-between" style={{ color: "#273e9c" }} href="#">Киев
                                            <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                                        </a>
                                    </h5>
                                    <span className="small">Прямой рейс</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="way-items-in col-lg-4 col-md-6">
                        <div className="position-relative">
                            <img src={second} alt="?" />
                            <div className="px-3">
                                <div className="way-items-body">
                                    <span className="small">Ташкент</span>
                                    <h5>
                                        <a className="d-flex align-items-center justify-content-between" style={{ color: "#273e9c" }} href="#">Москва
                                            <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                                        </a>
                                    </h5>
                                    <span className="small">Прямой рейс</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="way-items-in col-lg-4 col-md-6">
                        <div className="position-relative">
                            <img src={first} alt="?" />
                            <div className="px-3">
                                <div className="way-items-body">
                                    <span className="small">Ташкент</span>
                                    <h5>
                                        <a className="d-flex align-items-center justify-content-between" style={{ color: "#273e9c" }} href="#">Шарджа
                                            <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" />
                                        </a>
                                    </h5>
                                    <span className="small">Прямой рейс</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Way
