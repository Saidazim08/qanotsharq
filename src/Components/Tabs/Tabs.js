import { useState, React } from 'react';
import './Tabs.css';
import airplane from "../../images/airplane.svg";
import ticket from "../../images/ticket.svg";
import checking from "../../images/checking.svg";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Tabs() {
  const [flyfrom, setFlyfrom] = useState('Откуда')
  const selectFlyfrom = (v) => {
    setFlyfrom(v)
  }

  const [flyto, setFlyto] = useState('Куда')
  const selectFlyto = (v) => {
    setFlyto(v)
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [value, setValue] = useState('Куда');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = useState('Куда');

  const handleChange1 = (newValue1) => {
    setValue1(newValue1);
  };

  return (
    <div className="container widget">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <img src={airplane} alt="?" />
          ПОКУПКА
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <img src={ticket} alt="?" />
          РЕГИСТРАЦИЯ НА РЕЙС
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <img src={checking} alt="?" />
          МОИ БРОНИРОВАНИИ
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "tb1 content  active-content" : "content"}
        >
          <div className="row">
            <div className="col-lg-6 col-12 row tab-items">
              <div className="col-6 px-0">
                <label className="text-white fw-bold mb-2">Откуда</label>
                <DropdownButton
                  className="border-end"
                  title={flyfrom}
                  variant="secondary"
                  onSelect={selectFlyfrom}
                >
                  <Dropdown.Item className="d-flex" variant="success" eventKey="Ташкент - UZ"><p><b>Киев</b> Украина</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                  <Dropdown.Item className="d-flex" eventKey="Москва - RU"><p><b>Москва</b> Российская <br /> Федерация</p><span className="ms-auto text-muted">MOW</span> </Dropdown.Item>
                  <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Ташкент</b> Республика <br /> Узбекистан</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="col-6 px-0">
                <label className="text-white fw-bold mb-2">Куда</label>
                <DropdownButton
                  className="border-end"
                  title={flyto}
                  onSelect={selectFlyto}
                >
                  <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Киев</b> Украина</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                  <Dropdown.Item className="d-flex" eventKey="Москва - RU"><p><b>Москва</b> Российская <br /> Федерация</p><span className="ms-auto text-muted">MOW</span> </Dropdown.Item>
                  <Dropdown.Item className="d-flex" eventKey="Ташкент - UZ"><p><b>Ташкент</b> Республика <br /> Узбекистан</p><span className="ms-auto text-muted">TAS</span> </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="col-lg-6 col-12 row">
              <div className="col-5">
                <label className="mb-2 fw-bold">Дата с</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3} >
                    <DesktopDatePicker
                      inputFormat="dd/MM/yy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <div className="col-5">
                <label className="mb-2 fw-bold">Дата до</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      value={value1}
                      inputFormat="dd/MM/yy"
                      onChange={handleChange1}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <div className="col-2">
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="app-drop mt-3">
                <span className="me-2">1</span>
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
                          <span className="circle">-</span>
                          <span className="mx-2"> 1 </span>
                          <span className="circle active"> + </span>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="fw-bold">Дети</span>
                          <p>от 2 до 14 лет</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="circle"> - </span>
                          <span className="mx-2"> 1 </span>
                          <span className="circle active"> + </span>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="fw-bold">Младенцы</span>
                          <p>до 2 лет</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="circle"> - </span>
                          <span className="mx-2"> 1 </span>
                          <span className="circle active"> + </span>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="fw-bold">Младенцы с <br /> местом</span>
                          <p>до 2 лет</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="circle"> - </span>
                          <span className="mx-2"> 1 </span>
                          <span className="circle active"> + </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "tb2 content  active-content" : "content"}
        >
          <div className="app-form">
            <div className="row">
              <div className="col-lg-5 col-sm-6 d-flex flex-column">
                <label className="fw-bold">Номер билета</label>
                <input type="text" />
              </div>
              <div className="col-lg-5 col-sm-6 d-flex flex-column">
                <label className="fw-bold">Фамилия</label>
                <input type="text" />
              </div>
              <div className="col-lg-2">
                <button>Продолжить</button>
              </div>
            </div>
            <p>Онлайн-регистрация на рейс открывается за 48 часов до планового времени вылета.</p>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "tb2 content  active-content" : "content"}
        >
          <div className="app-form">
            <div className="row">
              <div className="col-lg-5 col-sm-6 d-flex flex-column">
                <label className="fw-bold">Фамилия пассажира (лат)</label>
                <input type="text" />
              </div>
              <div className="col-lg-5 col-sm-6 d-flex flex-column">
                <label className="fw-bold">Номер заказа, брони или билета</label>
                <input type="text" />
              </div>
              <div className="col-lg-2">
                <button>Продолжить</button>
              </div>
            </div>
            <p>Управление бронированием, отслеживание статуса и добавление дополнительных продуктов.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs;