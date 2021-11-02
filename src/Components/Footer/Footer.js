import React from 'react'
import logoFooter from '../../images/logo-footer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="container pt-4 footer">
                <div className="row pb-4 footer-top">
                    <div className="col-sm-6 text-center text-sm-start mb-3 mb-sm-0">
                        <Link to="#"> <img src={logoFooter} alt="?" color="white" width="200px" /></Link>
                    </div>
                    <div className="col-sm-6 text-center text-sm-end">
                        <Link to="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link className="ms-2" to="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link className="ms-2" to="#">
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                    </div>
                </div>
                <div className="border-bot"></div>
                <div className="row">
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Услуги</h5>
                        <ul>
                            <li><Link to="#">Купить билеты</Link></li>
                            <li><Link to="#">Багаж</Link></li>
                            <li><Link to="">Бортовое питание</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Информация</h5>
                        <ul>
                            <li><Link to="#">Тарифы</Link></li>
                            <li><Link to="#">Правила перевозок</Link></li>
                            <li><Link to="#">Права пассажиров</Link></li>
                            <li><Link to="#">Вопросы и ответы</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Компания</h5>
                        <ul>
                            <li><Link to="#">О компании</Link></li>
                            <li><Link to="#">Новости</Link></li>
                            <li><Link to="#">Вакансии</Link></li>
                            <li><Link to="#">Пресс-Центр</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center text-md-start">
                        <h5 className="text-white mb-4 mt-4">Контакты</h5>
                        <ul>
                            <li><Link to="#">+998 71 227 93 07</Link></li>
                            <li><Link to="#">+998 71 227 50 40</Link></li>
                            <li><Link to="#">info@qanotsharq.com</Link></li>
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