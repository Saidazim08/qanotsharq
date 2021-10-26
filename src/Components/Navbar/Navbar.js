import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className='nav-menu-items'>
                    <form className="search_sidebar">
                        <input type="text" placeholder="Поиск по сайту" />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                    <div className="px-3">
                        <Nav navbar>
                            <NavItem className="sidebar-bold">
                                <Link to="/">Покупка и управление</Link>
                            </NavItem>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Поиск
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Найти авиабилеты
                                    </DropdownItem>
                                    <DropdownItem>
                                        Мои бронирования
                                    </DropdownItem>
                                    <DropdownItem>
                                        Регистрация на рейс
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Покупка
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Авиабилеты
                                    </DropdownItem>
                                    <DropdownItem>
                                        Расписание полетов
                                    </DropdownItem>
                                    <DropdownItem>
                                        Маршрутная сеть
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Управление
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Мои бронирования
                                    </DropdownItem>
                                    <DropdownItem>
                                        Регистрация на рейс
                                    </DropdownItem>
                                    <DropdownItem>
                                        Возврат билета
                                    </DropdownItem>
                                    <DropdownItem>
                                        Изменение имени и фамилии
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Летайте с нами
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Акции
                                    </DropdownItem>
                                    <DropdownItem>
                                        Расписание полетов
                                    </DropdownItem>
                                    <DropdownItem>
                                        Групповая перевозка
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="sidebar-bold">
                                <Link to="/">Информация и услуги</Link>
                            </NavItem>
                            <NavItem className="sidebar-light">
                                <Link to="/">+998 71 227 93 07</Link>
                            </NavItem>
                            <NavItem className="sidebar-light">
                                <Link to="/">info@qanotsharq.com</Link>
                            </NavItem>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Общая Информация
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Тарифы
                                    </DropdownItem>
                                    <DropdownItem>
                                        Договор воздушной перевозки
                                    </DropdownItem>
                                    <DropdownItem>
                                        Правила Перевозок
                                    </DropdownItem>
                                    <DropdownItem>
                                        Права пассажиров
                                    </DropdownItem>
                                    <DropdownItem>
                                        Политика конфиденциальности
                                    </DropdownItem>
                                    <DropdownItem>
                                        Вопросы и ответы
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    Подготовка к полету
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Документы, необходимые для полета
                                    </DropdownItem>
                                    <DropdownItem>
                                        Перевозка багажа
                                    </DropdownItem>
                                    <DropdownItem>
                                        Перевозка животных
                                    </DropdownItem>
                                    <DropdownItem>
                                        Перелет детей, беременных женщин
                                    </DropdownItem>
                                    <DropdownItem>
                                        Перелет особых категорий пассажиров
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    В аэропорту
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Регистрация и оформление багажа
                                    </DropdownItem>
                                    <DropdownItem>
                                        Требования авиационной безопасности
                                    </DropdownItem>
                                    <DropdownItem>
                                        Предполетный и послеполетный контроль
                                    </DropdownItem>
                                    <DropdownItem>
                                        Посадка на борт
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    В полете
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Питание
                                    </DropdownItem>
                                    <DropdownItem>
                                        Правила поведения пассажиров
                                    </DropdownItem>
                                    <DropdownItem>
                                        Использования электронных устройств на борту
                                    </DropdownItem>
                                    <DropdownItem>
                                        Бортовой журнал
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="sidebar-bold">
                                <Link to="/">О компании</Link>
                            </NavItem>
                            <NavItem className="sidebar-light">
                                <Link to="/">+998 71 227 93 07</Link>
                            </NavItem>
                            <NavItem className="sidebar-light">
                                <Link to="/">info@qanotsharq.com</Link>
                            </NavItem>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    О компании
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Новости
                                    </DropdownItem>
                                    <DropdownItem>
                                        О нас
                                    </DropdownItem>
                                    <DropdownItem>
                                        Корпоративное управление
                                    </DropdownItem>
                                    <DropdownItem>
                                        Самолетный Парк
                                    </DropdownItem>
                                    <DropdownItem>
                                        Пресс-Центр
                                    </DropdownItem>
                                    <DropdownItem>
                                        Вакансии
                                    </DropdownItem>
                                    <DropdownItem>
                                        Связаться с нами
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="sidebar-bold mb-4 ">
                                <Link to="/">Call Center</Link>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar