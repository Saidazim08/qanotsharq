import React from 'react'
import { Link } from 'react-router-dom'
import News1 from "../../images/news.jpg"
import News2 from "../../images/news1.jpg"
import News3 from "../../images/news2.jpg"
import './News.css'

function News() {
    return (
        <div className="container news">
            <div className="d-flex align-items-center justify-content-between pt-3">
                <h4 className="text-white fw-normal">Новости</h4>
                <Link className="text-white small" to="#">Все новости</Link>
            </div>
            <div className="row">
                <div className="col-lg-6 mt-2 text-center text-sm-start d-sm-flex align-items-center justify-content-center justify-content-sm-start">
                    <Link to="#">
                        <img src={News1} alt="?" />
                    </Link>
                    <div className="news-card d-flex justify-content-between flex-column">
                        <p>15 августа, 2019</p>
                        <Link to="#">Qanot Sharq заявила о планах запустить региональную авиакомпанию в Узбекистане</Link>
                        <p>Qanot Sharq планирует запустить в Узбекистане регионального авиаперевозчика</p>
                        <p className="text-end">Источник: <Link to="#">Kun.uz</Link></p>
                    </div>
                </div>
                <div className="col-lg-6 mt-2 text-center text-sm-start d-sm-flex align-items-center justify-content-center justify-content-sm-start">
                    <Link to="#">
                        <img src={News2} alt="?" />
                    </Link>
                    <div className="news-card d-flex justify-content-between flex-column">
                        <p>26 апреля, 2021</p>
                        <Link to="#">Частная авиакомпания Qanot Sharq получила первый самолет Airbus A320</Link>
                        <p>В Ташкент прилетел первый самолет Airbus A320-200 для частной авиакомпании Qanot Sharq...</p>
                        <p className="text-end">Источник: <Link to="#">Kun.uz</Link></p>
                    </div>
                </div>
                <div className="col-lg-6 mt-2 text-center text-sm-start d-sm-flex align-items-center justify-content-center justify-content-sm-start">
                    <Link to="#">
                        <img src={News3} alt="?" />
                    </Link>
                    <div className="news-card d-flex justify-content-between flex-column">
                        <p>18 сентября, 2021</p>
                        <Link to="#">Qanot Sharq выполнила свой первый рейс</Link>
                        <p>До конца сентября запланировано еще пять рейсов по данному направлению.</p>
                        <p className="text-end">Источник: <Link to="#">Spot</Link></p>
                    </div>
                </div>
                <div className="col-lg-6 mt-2 text-center text-sm-start d-sm-flex align-items-center offset-sm-0 justify-content-center justify-content-sm-start">
                    <Link to="#">
                        <img src={News3} alt="?" />
                    </Link>
                    <div className="news-card d-flex flex-column justify-content-between">
                        <p>21 сентября, 2021</p>
                        <Link to="#">Запущены новые рейсы из Узбекистана в ОАЭ</Link>
                        <p>Частная узбекская авиакомпания выполнила первый рейс в ОАЭ.</p>
                        <p className="text-end">Источник: <Link to="#">Русские Эмираты</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
