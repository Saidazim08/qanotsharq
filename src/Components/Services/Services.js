import React from 'react'
import services1 from '../../images/services-1.png'
import services2 from '../../images/services-2.png'
import services3 from '../../images/services-3.png'
import services4 from '../../images/services-4.png'
import "./Services.css"

function Services() {
    return (
        <div className="container services pb-5">
            <h2 className="ms-4 pt-5 fw-normal">Услуги</h2>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center mt-4">
                    <div className="col-11 d-flex shadow" style={{ background: "#4b89bf" }}>
                        <div className="d-flex flex-column justify-content-between">
                            <div className="text-white">
                                <h5>Перевозка багажа</h5>
                                <p>Покупайте на сайте со скидкой</p>
                            </div>
                            <button className="btn">Узнать больше</button>
                        </div>
                        <img src={services1} alt="?" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-4">
                    <div className="col-11 d-flex shadow" style={{ background: "#4fd7c6" }}>
                        <div className="d-flex flex-column justify-content-between">
                            <div className="text-white">
                                <h5>Перевозка багажа</h5>
                                <p>Покупайте на сайте со скидкой</p>
                            </div>
                            <button className="btn">Узнать больше</button>
                        </div>
                        <img src={services2} alt="?" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-4">
                    <div className="col-11 d-flex shadow justify-content-between pe-0" style={{ background: "#e4aa72" }}>
                        <div className="d-flex flex-column justify-content-between">
                            <div className="text-white">
                                <h5>Перевозка багажа</h5>
                                <p>Покупайте на сайте со скидкой</p>
                            </div>
                            <button className="btn">Узнать больше</button>
                        </div>
                        <img className="img-out" src={services3} alt="?" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-4">
                    <div className="col-11 d-flex shadow justify-content-between pe-0" style={{ background: "#3f3f3f" }}>
                        <div className="d-flex flex-column justify-content-between">
                            <div className="text-white">
                                <h5>Перевозка багажа</h5>
                                <p>Покупайте на сайте со скидкой</p>
                            </div>
                            <button className="btn">Узнать больше</button>
                        </div>
                        <img className="img-out" src={services4} alt="?" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services