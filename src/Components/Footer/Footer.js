import React from 'react'
import logoFooter from '../../images/logo-footer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="container pt-4 footer">
                <div className="row pb-4 footer-top">
                    <div className="col-sm-6 text-center text-sm-start mb-3 mb-sm-0">
                        <a href="#"> <img src={logoFooter} alt="?" color="white" width="200px" /></a>
                    </div>
                    <div className="col-sm-6 text-center text-sm-end">
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="ms-2" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="ms-2" href="#">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </div>
                </div>
                <div className="border-bot"></div>
                <div className="row">
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Услуги</h5>
                        <ul>
                            <li><a href="#">Купить билеты</a></li>
                            <li><a href="#">Багаж</a></li>
                            <li><a href="">Бортовое питание</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Информация</h5>
                        <ul>
                            <li><a href="#">Тарифы</a></li>
                            <li><a href="#">Правила перевозок</a></li>
                            <li><a href="#">Права пассажиров</a></li>
                            <li><a href="#">Вопросы и ответы</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Компания</h5>
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Вакансии</a></li>
                            <li><a href="#">Пресс-Центр</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Контакты</h5>
                        <ul>
                            <li><a href="#">+998 71 227 93 07</a></li>
                            <li><a href="#">+998 71 227 50 40</a></li>
                            <li><a href="#">info@qanotsharq.com</a></li>
                        </ul>
                    </div>
                    <div className="col-12 text-md-end text-center text-white mt-4">
                        <p>Qanot Sharq © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer