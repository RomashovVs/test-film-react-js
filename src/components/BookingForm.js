import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {reset} from "../store/MovieSlice";
import {initializingState} from "../store/SearchSlice";

function BookingForm(props) {

  const [numberTicket, setNumberTicket] = useState(0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errorsValidate, setErrorsValidate] = useState([])
  const [dateSession, setDateSession] = useState(props.dateShow.at(0).date)
  const [timeSessions, setTimeSessions] = useState(props.dateShow.at(0).sessions)
  const [timeSession, setTimeSession] = useState(props.dateShow.at(0).sessions[0].timeSession)
  const dispatch = useDispatch()

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      console.log("Нажата Enter")
    }
  };

  useEffect(()=>{
    console.log("Rerender");
  }, [props, errorsValidate, timeSession, errorsValidate])

  const handleSelectDate = (event) => {
    setDateSession(event.target.value)
    setTimeSessions(props.dateShow.filter((d)=>(d.date===event.target.value))[0].sessions)
  };

  const handleSelectSessionTime = (event) => {
    console.log(event.target)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validate())
    {
      console.log(props);
      console.log("Имя " + name)
      console.log("Телефон " + phone)
      console.log("Дата сеанса " + dateSession)
      console.log("Количество билетов " + numberTicket)
      console.log("Фильм " + props.title)
    }
  }

  const onReset = () => {
    console.log("Reset")
    dispatch(reset())
    dispatch(initializingState())
  }

  const validate = () => {
    console.log(timeSession)
    setErrorsValidate([])
    let isValidate = true

    if (name.length === 0){
      setErrorsValidate((prevState) => ([...prevState, "name"]))
      isValidate = false
    }

    let pattern = new RegExp( "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")
    console.log(phone.length)
    if (!pattern.test(phone) && phone.length < 11){
      setErrorsValidate((prevState) => ([...prevState, "phone"]))
      isValidate = false
    }

    let selectCurrentSession = timeSessions.find(s => s.timeSession === timeSession)
    if ((numberTicket.valueOf() <= 0) || (numberTicket > selectCurrentSession.freePlace)){
      setErrorsValidate((prevState) => ([...prevState, "numberTicket"]))
      isValidate = false
    }

    return isValidate;
  }

  return (
    <div>
      <form>

        <label>Введите ваше имя:</label>
        <div className="col-4 mb-2">
          <input type='text'
                 className="form-control"
                 id="name"
                 aria-describedby="nameHelp"
                 placeholder="Имя"
                 onChange={(e)=>(setName(e.target.value))}
                 onKeyDown={handleKey}
          />
          {errorsValidate.includes("name") &&
            <small className="text-danger col-2">
              Заполните поле!
            </small>
          }
        </div>

        <label>Введите ваш контактный номер телефона:</label>
        <div className="col-4 mb-2">
          <input type='text'
                 className="form-control"
                 id="phone"
                 aria-describedby="phoneHelp"
                 placeholder="Телефон"
                 onChange={(e)=>(setPhone(e.target.value))}
                 onKeyDown={handleKey}
          />
          {errorsValidate.includes("phone") &&
            <small className="text-danger col-2">
              Неверно заполнен номер!
            </small>
          }
        </div>

        <label htmlFor="selectDate">Выберите желаемую дату:</label>
        <div className="col-3 mb-2">
          <select id="selectDate"
                  className="form-select"
                  onChange={handleSelectDate}
          >
            {props.dateShow.map((session)=>{return (
              <option key={session.date} value={session.date}>{session.date}</option>
            )})}
          </select>
        </div>

        <label htmlFor="selectDate">Выберите время сеанса:</label>
        <div className="col-3 mb-2">
          <select id="sessionTime"
                  className="form-select"
                  onChange={(e)=>(setTimeSession(e.target.value))}
          >
            {timeSessions.map((session, idx)=>{return (
              <option key={idx} value={session.timeSession}>{session.timeSession}</option>
            )})}
          </select>
        </div>

        <label htmlFor="number_ticket">Выберите количество билетов на фильм:</label>
        <div className="col-2 mb-2">
          <input type='text'
                 className="form-control"
                 id="number_ticket"
                 aria-describedby="number_ticketHelp"
                 value={numberTicket}
                 disabled={timeSession.freePlace===0}
                 onChange={(e)=>(setNumberTicket(e.target.value))}
                 onKeyDown={handleKey}
          />
          {errorsValidate.includes("numberTicket") &&
            <small className="text-danger position-absolute">
              Ошибка количества билетов!
            </small>
          }
        </div>


        <button className="btn btn-primary mb-2 mt-4" type="submit" onClick={onSubmit} disabled={timeSession.freePlace===0}>Submit</button>
        <button className="btn btn-outline-primary mb-2 mx-2 mt-4" type="reset" onClick={onReset}>Cancel</button>
      </form>
    </div>
  )
}

export { BookingForm };
