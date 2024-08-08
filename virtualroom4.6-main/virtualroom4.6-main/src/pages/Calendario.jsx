import React, { useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { format } from 'date-fns'
import ptBr, { ptBR } from 'date-fns/locale/pt-BR'
import "../components/Calendario.css"
import 'moment/locale/pt-br'

const localizer = momentLocalizer(moment)

const Calendario = () => {

  const [events, setEvents] = useState([
    {
      start: moment("2024-05-15T10:00:00").toDate(),
      end: moment("2024-05-15T10:00:00")
      //.add(1, "days")
      .toDate(), 
      title: "Prova de JavaScript"
    },
    {
      start: moment("2024-05-16T10:00:00").toDate(),
      end: moment("2024-05-16T10:00:00")
      //.add(1, "days")
      .toDate(), 
      title: "Prova de Java"
    }
  ]);

  const formats = format(new Date(), 'MMMM', { locale: ptBR});

  moment.locale('pt-br');

  return (
    <body className="   rounded-sm h-screen bg-gray-300 ">
    <div className="ml-60 rounded-sm h-screen bg-gray-300 shadow-2xl ">

    <div className='div-maior'>
    <div className='div_calendario'>
       <Calendar 
       localizer={localizer}
       formats={formats}
       defaultDate={new Date()}
       defaultView="month"
       events={events}
       startAccessor="start"
       endAccessor="end"
       style={{ height: '500px' }}
       messages={{
        next: "Amanhã",
        previous: "Ontem",
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia",
        time: "Hora",
        event: "Evento",
        allDay: "Dia todo",
        date: "Data",
        agenda: "Agenda",
       }}
       
       />
      </div>
      </div>

      </div>
   <hr /> 
  </body>
  )
}

export default Calendario