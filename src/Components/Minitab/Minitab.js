import React, { useState, Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './Minitab.css'

function Minitab() {
    let [count, setCount] = useState(1);
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        if (count === 0) {
            return;
        }
        count = count - 1;
        setCount(count);
    }

    function incrementCount1() {
        count1 = count1 + 1;
        setCount1(count1);
    }
    function decrementCount1() {
        if (count1 === 0) {
            return;
        }
        count1 = count1 - 1;
        setCount1(count1);
    }

    function incrementCount2() {
        count2 = count2 + 1;
        setCount2(count2);
    }
    function decrementCount2() {
        if (count2 === 0) {
            return;
        }
        count2 = count2 - 1;
        setCount2(count2);
    }

    function incrementCount3() {
        count3 = count3 + 1;
        setCount3(count3);
    }
    function decrementCount3() {
        if (count3 === 0) {
            return;
        }
        count3 = count3 - 1;
        setCount3(count3);
    }

    const allcount = count + count1 + count2 + count3

    const [selectedDate, handleDateChange] = useState(null);
    const [selectedDate1, handleDateChange1] = useState(null);

    const [flyfrom, setFlyfrom] = useState('Откуда')
    const selectFlyfrom = (v) => {
        setFlyfrom(v)
    }

    const [flyto, setFlyto] = useState('Куда')
    const selectFlyto = (v) => {
        setFlyto(v)
    }
    return (
        <>
            <div className="container-fluid widgetmini">
                <Accordion defaultActiveKey="20">
                    <Accordion.Item eventKey="20">
                        <Accordion.Header>ПОКУПКА</Accordion.Header>
                        <Accordion.Body>
                            <form>
                                <div className="col-12 mt-3 px-0">
                                    <label className="fw-bold mb-2">Откуда</label>
                                    <DropdownButton
                                        title={flyfrom}
                                        onSelect={selectFlyfrom}
                                    >
                                        <Dropdown.Item className="d-flex" variant="success" eventKey="Ташкент - UZ"><p><b>Киев</b> Украина</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                                        <Dropdown.Item className="d-flex" eventKey="Москва - RU"><p><b>Москва</b> Российская <br /> Федерация</p><span className="ms-auto text-muted">MOW</span> </Dropdown.Item>
                                        <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Ташкент</b> Республика <br /> Узбекистан</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="col-12 mt-3 px-0">
                                    <label className="fw-bold mb-2">Куда</label>
                                    <DropdownButton
                                        title={flyto}
                                        onSelect={selectFlyto}
                                    >
                                        <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Киев</b> Украина</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                                        <Dropdown.Item className="d-flex" eventKey="Москва - RU"><p><b>Москва</b> Российская <br /> Федерация</p><span className="ms-auto text-muted">MOW</span> </Dropdown.Item>
                                        <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Ташкент</b> Республика <br /> Узбекистан</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <label className="mb-2 fw-bold">Дата</label>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Fragment>
                                                <DatePicker
                                                    autoOk
                                                    format="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    variant="inline"
                                                    value={selectedDate}
                                                    placeholder="Туда"
                                                    onChange={handleDateChange}
                                                />
                                            </Fragment>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className="col-6">
                                        <label className="mb-2 fw-bold">Дата</label>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Fragment>
                                                <DatePicker
                                                    autoOk
                                                    format="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    variant="inline"
                                                    value={selectedDate1}
                                                    placeholder="Обратно"
                                                    onChange={handleDateChange1}
                                                />
                                            </Fragment>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="minibutton">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                    <div className="col-12 ">
                                        <div className="app-drop mt-3">
                                            <span className="me-2">{allcount}</span>
                                            Пассажир
                                            <FontAwesomeIcon className="ms-2 btn-group-vertical" icon={faCaretDown} />
                                            <div className="app-drop-body">
                                                <div className="app-drop-inside">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-between">
                                                            <div className="d-flex flex-column">
                                                                <span className="fw-bold">Взрослые</span>
                                                                <p>от 15 лет</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span onClick={decrementCount} className="circle">-</span>
                                                                <span className="mx-2"> {count} </span>
                                                                <span onClick={incrementCount} className="circle active"> + </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 d-flex justify-content-between">
                                                            <div className="d-flex flex-column">
                                                                <span className="fw-bold">Дети</span>
                                                                <p>от 2 до 14 лет</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span onClick={decrementCount1} className="circle"> - </span>
                                                                <span className="mx-2"> {count1} </span>
                                                                <span onClick={incrementCount1} className="circle active"> + </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 d-flex justify-content-between">
                                                            <div className="d-flex flex-column">
                                                                <span className="fw-bold">Младенцы</span>
                                                                <p>до 2 лет</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span onClick={decrementCount2} className="circle"> - </span>
                                                                <span className="mx-2"> {count2} </span>
                                                                <span onClick={incrementCount2} className="circle active"> + </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 d-flex justify-content-between">
                                                            <div className="d-flex flex-column">
                                                                <span className="fw-bold">Младенцы с <br /> местом</span>
                                                                <p>до 2 лет</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span onClick={decrementCount3} className="circle"> - </span>
                                                                <span className="mx-2"> {count3} </span>
                                                                <span onClick={incrementCount3} className="circle active"> + </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="21">
                        <Accordion.Header>РЕГИСТРАЦИЯ НА РЕЙС</Accordion.Header>
                        <Accordion.Body>
                            <form>
                                <div className="row">
                                    <div className=" col-6 d-flex flex-column">
                                        <label className="fw-bold mb-2">Номер билета</label>
                                        <input className="py-2" type="text" />
                                    </div>
                                    <div className="col-6 d-flex flex-column">
                                        <label className="fw-bold mb-2">Фамилия</label>
                                        <input className="py-2" type="text" />
                                    </div>
                                    <div className="col-12 my-3">
                                        <button type="submit" className="minibutton">Продолжить</button>
                                    </div>
                                </div>
                            </form>
                            <p>Онлайн-регистрация на рейс открывается за 48 часов до планового времени вылета.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="22">
                        <Accordion.Header>МОИ БРОНИРОВАНИИ</Accordion.Header>
                        <Accordion.Body>
                            <form>
                                <div className="row">
                                    <div className=" col-6 d-flex flex-column">
                                        <label className="fw-bold mb-2">Фамилия пассажира (лат)</label>
                                        <input className="py-2" type="text" />
                                    </div>
                                    <div className="col-6 d-flex flex-column">
                                        <label className="fw-bold mb-2">Номер заказа, брони или билета</label>
                                        <input className="py-2" type="text" />
                                    </div>
                                    <div className="col-12 my-3">
                                        <button type="submit " className="minibutton">Продолжить</button>
                                    </div>
                                </div>
                            </form>
                            <p>Управление бронированием, отслеживание статуса и добавление дополнительных продуктов.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default Minitab
