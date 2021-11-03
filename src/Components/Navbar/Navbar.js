import React, { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Nav, NavItem} from 'reactstrap';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { Accordion } from 'react-bootstrap'

function Navbar() {
    const ref = useRef();

    const [sidebar, setSidebar] = useState(false)

    const handleClick = () => {
        setSidebar((prev) => !prev);
    };

    const handleClickAway = () => {
        setSidebar(false);
    };


    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FontAwesomeIcon icon={faBars} onClick={handleClick}> </FontAwesomeIcon>
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <div ref={ref} className='nav-menu-items'>
                            <form className="search_sidebar">
                                <input type="text" placeholder="Поиск по сайту" />
                                <button>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                            <div className="px-3">
                                <Nav navbar>
                                    <Accordion flush className="pb-5">
                                        <NavItem className="sidebar-bold">
                                            <Link to="/">Покупка и управление</Link>
                                        </NavItem>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>Поиск</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Найти авиабилеты</Link><br /><br />
                                                <Link to="#">Мои бронирования</Link><br /><br />
                                                <Link to="#">Регистрация на рейс</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12">
                                            <Accordion.Header>Покупка</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Авиабилеты</Link><br /><br />
                                                <Link to="#">Расписание полетов</Link><br /><br />
                                                <Link to="#">Маршрутная сеть</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13">
                                            <Accordion.Header>Управление</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Мои бронирования</Link><br /><br />
                                                <Link to="#">Регистрация на рейс</Link><br /><br />
                                                <Link to="#">Возврат билета</Link><br /><br />
                                                <Link to="#">Изменение имени и фамилии</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14">
                                            <Accordion.Header>Летайте с нами</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Акции</Link><br /><br />
                                                <Link to="#">Групповая перевозка</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <NavItem className="sidebar-bold">
                                            <Link to="/">Информация и услуги</Link>
                                        </NavItem>
                                        <NavItem className="sidebar-light">
                                            <Link to="/">+998 71 227 93 07</Link>
                                        </NavItem>
                                        <NavItem className="sidebar-light">
                                            <Link to="/">info@qanotsharq.com</Link>
                                        </NavItem>
                                        <Accordion.Item eventKey="15">
                                            <Accordion.Header>Общая Информация</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Тарифы</Link><br /><br />
                                                <Link to="#">Договор воздушной перевозки</Link><br /><br />
                                                <Link to="#">Правила перевозок</Link><br /><br />
                                                <Link to="#">Права пассажиров</Link><br /><br />
                                                <Link to="#">Политика конфиденциальности</Link><br /><br />
                                                <Link to="#">Вопросы и ответы</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16">
                                            <Accordion.Header>Подготовка к полету</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Документы, необходимые для осуществления перелёта</Link><br /><br />
                                                <Link to="#">Перевозка багажа</Link><br /><br />
                                                <Link to="#">Перевозка животных</Link><br /><br />
                                                <Link to="#">Перелет детей, беременных женщин</Link><br /><br />
                                                <Link to="#">Перелет особых категорий пассажиров</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="17">
                                            <Accordion.Header>В аэропорту</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Регистрация пассажиров и оформление багажа</Link><br /><br />
                                                <Link to="#">Требования авиационной безопасности</Link><br /><br />
                                                <Link to="#">Предполетный и послеполетный контроль</Link><br /><br />
                                                <Link to="#">Посадка на борт</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18">
                                            <Accordion.Header>В полете</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Питание</Link><br /><br />
                                                <Link to="#">Правила поведения пассажиров</Link><br /><br />
                                                <Link to="#">Использования электронных устройств на борту</Link><br /><br />
                                                <Link to="#">Бортовой журнал</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <NavItem className="sidebar-bold">
                                            <Link to="/">О компании</Link>
                                        </NavItem>
                                        <NavItem className="sidebar-light">
                                            <Link to="/">+998 71 227 93 07</Link>
                                        </NavItem>
                                        <NavItem className="sidebar-light">
                                            <Link to="/">info@qanotsharq.com</Link>
                                        </NavItem>
                                        <Accordion.Item eventKey="19">
                                            <Accordion.Header>О компании</Accordion.Header>
                                            <Accordion.Body>
                                                <Link to="#">Новости</Link><br /><br />
                                                <Link to="#">О нас</Link><br /><br />
                                                <Link to="#">Корпоративное управление</Link><br /><br />
                                                <Link to="#">Самолетный Парк</Link><br /><br />
                                                <Link to="#">Пресс-Центр</Link><br /><br />
                                                <Link to="#">Ваканции</Link><br /><br />
                                                <Link to="#">Связаться с нами</Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <NavItem className="sidebar-bold mb-4 ">
                                            <Link to="/">Call Center</Link>
                                        </NavItem>
                                    </Accordion>
                                </Nav>
                            </div>
                        </div>
                    </nav>
                </div>
            </ClickAwayListener>
        </>
    )
}

export default Navbar