import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getMovies, reset} from "../store/MovieSlice";
import {initializingState} from "../store/SearchSlice";

function BookingForm(props) {

  const [numberTicket, setNumberTicket] = useState(0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [dateSession, setDateSession] = useState(props.sessions.at(0).date)
  const dispatch = useDispatch()

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      console.log("Нажата Enter")
    }
  };

  useEffect(()=>{
  }, [props])

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(props);
    console.log("Имя " + name)
    console.log("Телефон " + phone)
    console.log("Дата сеанса " + dateSession)
    console.log("Количество билетов " + numberTicket)
    console.log("Фильм " + props.title)
  }

  const onReset = (event) => {
    console.log("Reset")
    dispatch(reset())
    dispatch(initializingState())
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
        </div>

        <label htmlFor="selectDate">Выберите желаемую дату:</label>
        <div className="col-3 mb-2">
          <select id="selectDate"
                  className="form-select"
                  onChange={(e)=>(setDateSession(e.target.value))}
          >
            {props.sessions.map((session)=>{return (
              <option key={session.date} value={session.date}>{session.date}</option>
            )})}
          </select>
        </div>

        <label htmlFor="number_ticket">Выберите количество билетов на фильм:</label>
        <div className="col-2 mb-2">
          <input type='int'
                 className="form-control"
                 id="number_ticket"
                 aria-describedby="number_ticketHelp"
                 value={numberTicket}
                 onChange={(e)=>(setNumberTicket(e.target.value))}
                 onKeyDown={handleKey}
          />
        </div>
        <button className="btn btn-primary mb-2 mt-2" type="submit" onClick={onSubmit}>Submit</button>
        <button className="btn btn-outline-primary mb-2 mx-2 mt-2" type="reset" onClick={onReset}>Cancel</button>
      </form>
    </div>
  )
}

export { BookingForm };
