import React, { useState } from 'react'
import "./Header.css"
import logo from "../../logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faSortDown, faSortUp, faTimes, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap'
import ru from '../../images/rus.png'
import en from '../../images/eng.png'
import uz from '../../images/uz.png'
import Navbar from '../Navbar/Navbar'

function Header() {
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const [value, setValue] = useState("Ru")
    const handleSelect = (e) => {
        setValue(e)
    }
    const [valute, setValute] = useState('USD 10 700')
    const selectValute = (v) => {
        setValute(v)
    }
    return (
        <header>
            <nav>
                <a href="#"> <img src={logo} alt="?" width="200px" /></a>
                
                <ul className="links">
                    <li><a className="toplink" href="#">COVID-19</a></li>
                    <li>
                        <a className="toplink" onClick={() => setDrop(true) || setDrop2(false)} href="#">Покупка и управление</a>
                        {drop ? <div className="drop-hidden position-absolute">
                            <div className="drop-body">
                                <FontAwesomeIcon onClick={() => setDrop(false)} icon={faTimes} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <h4>Поиск</h4>
                                            <ul>
                                                <li><a href="#">Найти авиабилеты</a></li>
                                                <li><a href="#">Мои бронирования</a></li>
                                                <li><a href="#">Регистрация на рейс</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Покупка</h4>
                                            <ul>
                                                <li><a href="#">Авиабилеты</a></li>
                                                <li><a href="#">Расписание полетов</a></li>
                                                <li><a href="#">Маршрутная сетьс</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Управление</h4>
                                            <ul>
                                                <li><a href="#">Мои бронирования</a></li>
                                                <li><a href="#">Регистрация на рейс</a></li>
                                                <li><a href="#">Возврат билета</a></li>
                                                <li><a href="#">Изменение имени и фамилии</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Летайте с нами</h4>
                                            <ul>
                                                <li><a href="#">Акции</a></li>
                                                <li><a href="#">Чартерные перевозки и популярные направление</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    </li>
                    <li>
                        <a className="toplink" onClick={() => setDrop2(true)} href="#">Информация и услуги</a>
                        {drop2 ? <div className="drop-hidden position-absolute">
                            <div className="drop-body">
                                <FontAwesomeIcon onClick={() => setDrop2(false) || setDrop(false)} icon={faTimes} />
                                <div className="container-fluid px-5">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-6">
                                            <ul>
                                                <li className="contact"><a href="#"><FontAwesomeIcon className="me-1" icon={ faPhone} /> +998 71 227 93 07</a></li>
                                                <li className="contact"><a href="#"><FontAwesomeIcon className="me-1" icon={faEnvelope} /> info@qanotsharq.com</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>Общая Информация</h4>
                                            <ul>
                                                <li><a href="#">Тарифы</a></li>
                                                <li><a href="#">Договор воздушной перевозки</a></li>
                                                <li><a href="#">Правила Перевозок</a></li>
                                                <li><a href="#">Права пассажиров</a></li>
                                                <li><a href="#">Политика конфиденциальности</a></li>
                                                <li><a href="#">Вопросы и ответы</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>Подготовка к полету</h4>
                                            <ul>
                                                <li><a href="#">Документы, необходимые для полета</a></li>
                                                <li><a href="#">Перевозка багажа</a></li>
                                                <li><a href="#">Перевозка животных</a></li>
                                                <li><a href="#">Перелет детей, беременных женщин</a></li>
                                                <li><a href="#">Перелет особых категорий пассажиров</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>В аэропорту</h4>
                                            <ul>
                                                <li><a href="#">Регистрация и оформление багажа</a></li>
                                                <li><a href="#">Требования авиационной безопасности</a></li>
                                                <li><a href="#">Предполетный и послеполетный контроль</a></li>
                                                <li><a href="#">Посадка на борт</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>В полете</h4>
                                            <ul>
                                                <li><a href="#">Питание</a></li>
                                                <li><a href="#">Правила поведения пассажиров</a></li>
                                                <li><a href="#">Использования электронных устройств на борту</a></li>
                                                <li><a href="#">Бортовой журнал</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>О компании</h4>
                                            <ul>
                                                <li><a href="#">Новости</a></li>
                                                <li><a href="#">О нас</a></li>
                                                <li><a href="#">Корпоративное управление</a></li>
                                                <li><a href="#">Самолетный Парк</a></li>
                                                <li><a href="#">Пресс-Центр</a></li>
                                                <li><a href="#">Вакансии</a></li>
                                                <li><a href="#">Связаться с нами</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null}</li>
                    <li><a className="toplink" href="#">Call Center</a></li>
                </ul>

                <ul className="top-right d-flex align-items-center">
                    <li>
                        <div onClick={() => setOpen(true)} className="search">
                            <FontAwesomeIcon icon={faSearch} /> Поиск
                        </div>
                        <div className="hidden-input">
                            {open ? <form>
                                <input type="text" placeholder="Поиск по сайту" />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <FontAwesomeIcon onClick={() => setOpen(false)} icon={faTimes} />
                            </form> : null}
                        </div>
                    </li>
                    <li className="middle d-flex align-items-center">
                        <FontAwesomeIcon icon={faGlobe} />
                        <DropdownButton
                            title={value}
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Ru"><img src={ru} width="20px" alt="?" /> Ru</Dropdown.Item>
                            <Dropdown.Item eventKey="En"><img src={en} width="20px" alt="?" /> En</Dropdown.Item>
                            <Dropdown.Item eventKey="Uz"><img src={uz} width="20px" alt="?" /> Uz</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="d-flex align-items-center">
                        <a href="#">
                            <div>
                                <DropdownButton
                                    className="bord"
                                    title={valute}
                                    onSelect={selectValute}
                                >
                                    <Dropdown.Item classname="down-red" eventKey="USD 10 700"> USD 10 700 <FontAwesomeIcon icon={faSortDown} /> </Dropdown.Item>
                                    <Dropdown.Item classname="up-green" eventKey="EUR 12 366"> EUR 12 366 <FontAwesomeIcon icon={faSortUp} /> </Dropdown.Item>
                                    <Dropdown.Item classname="down-red" eventKey="RUB 149"> RUB 149 <FontAwesomeIcon icon={faSortDown} /></Dropdown.Item>
                                    <Dropdown.Item classname="down-red" eventKey="GBP 14 585"> GBP 14 585 <FontAwesomeIcon icon={faSortDown} /></Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav >
            <Navbar />
        </header >
    )
}

export default Header
