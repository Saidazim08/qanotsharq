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
import { Link } from 'react-router-dom'

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
                <Link to="/"> <img src={logo} alt="?" width="200px" /></Link>
                
                <ul className="links">
                    <li><Link onClick={() => setDrop(false)} className="toplink" to="/Covid">COVID-19</Link></li>
                    <li>
                        <Link className="toplink" onClick={() => setDrop(true) || setDrop2(false)} to="#">Покупка и управление</Link>
                        {drop ? <div className="drop-hidden position-absolute">
                            <div className="drop-body">
                                <FontAwesomeIcon onClick={() => setDrop(false)} icon={faTimes} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <h4>Поиск</h4>
                                            <ul>
                                                <li><Link to="#">Найти авиабилеты</Link></li>
                                                <li><Link to="#">Мои бронирования</Link></li>
                                                <li><Link to="#">Регистрация на рейс</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Покупка</h4>
                                            <ul>
                                                <li><Link to="#">Авиабилеты</Link></li>
                                                <li><Link to="#">Расписание полетов</Link></li>
                                                <li><Link to="#">Маршрутная сетьс</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Управление</h4>
                                            <ul>
                                                <li><Link to="#">Мои бронирования</Link></li>
                                                <li><Link to="#">Регистрация на рейс</Link></li>
                                                <li><Link to="#">Возврат билета</Link></li>
                                                <li><Link href="#">Изменение имени и фамилии</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <h4>Летайте с нами</h4>
                                            <ul>
                                                <li><Link to="#">Акции</Link></li>
                                                <li><Link to="#">Чартерные перевозки и популярные направление</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    </li>
                    <li>
                        <Link className="toplink" onClick={() => setDrop2(true)} to="#">Информация и услуги</Link>
                        {drop2 ? <div className="drop-hidden position-absolute">
                            <div className="drop-body">
                                <FontAwesomeIcon onClick={() => setDrop2(false) || setDrop(false)} icon={faTimes} />
                                <div className="container-fluid px-5">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-6">
                                            <ul>
                                                <li className="contact"><Link to="#"><FontAwesomeIcon className="me-1" icon={ faPhone} /> +998 71 227 93 07</Link></li>
                                                <li className="contact"><Link to="#"><FontAwesomeIcon className="me-1" icon={faEnvelope} /> info@qanotsharq.com</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>Общая Информация</h4>
                                            <ul>
                                                <li><Link to="#">Тарифы</Link></li>
                                                <li><Link to="#">Договор воздушной перевозки</Link></li>
                                                <li><Link to="#">Правила Перевозок</Link></li>
                                                <li><Link to="#">Права пассажиров</Link></li>
                                                <li><Link to="#">Политика конфиденциальности</Link></li>
                                                <li><Link to="#">Вопросы и ответы</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>Подготовка к полету</h4>
                                            <ul>
                                                <li><Link to="#">Документы, необходимые для полета</Link></li>
                                                <li><Link to="#">Перевозка багажа</Link></li>
                                                <li><Link to="#">Перевозка животных</Link></li>
                                                <li><Link to="#">Перелет детей, беременных женщин</Link></li>
                                                <li><Link to="#">Перелет особых категорий пассажиров</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>В аэропорту</h4>
                                            <ul>
                                                <li><Link to="#">Регистрация и оформление багажа</Link></li>
                                                <li><Link to="#">Требования авиационной безопасности</Link></li>
                                                <li><Link to="#">Предполетный и послеполетный контроль</Link></li>
                                                <li><Link to="#">Посадка на борт</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>В полете</h4>
                                            <ul>
                                                <li><Link to="#">Питание</Link></li>
                                                <li><Link to="#">Правила поведения пассажиров</Link></li>
                                                <li><Link to="#">Использования электронных устройств на борту</Link></li>
                                                <li><Link to="#">Бортовой журнал</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <h4>О компании</h4>
                                            <ul>
                                                <li><Link to="#">Новости</Link></li>
                                                <li><Link to="#">О нас</Link></li>
                                                <li><Link to="#">Корпоративное управление</Link></li>
                                                <li><Link to="#">Самолетный Парк</Link></li>
                                                <li><Link to="#">Пресс-Центр</Link></li>
                                                <li><Link to="#">Вакансии</Link></li>
                                                <li><Link to="#">Связаться с нами</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null}</li>
                    <li><Link className="toplink" to="#">Call Center</Link></li>
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
                        <Link to="#">
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
                        </Link>
                    </li>
                </ul>
            </nav >
            <Navbar />
        </header >
    )
}

export default Header
