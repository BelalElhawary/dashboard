import React, { useState } from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/DataLists'
import { Button, Header } from '../components'
import { calendar, LoadCalendar, SaveCalendar} from '../data/DataLoader'
import { useRef } from 'react'
import { useStateContext } from '../context/ContextProvider'


const Calendar = () => {
  const {currentColor} = useStateContext();
  const comp = useRef(null)
  const source = (prop) => {
    if(prop)
      comp.current.eventSettings.dataSource = prop
    else
      return comp.current.eventSettings.dataSource
  }
  LoadCalendar(source)
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent ref={comp} height='650px' eventSettings={{ dataSource: calendar }}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <Button bgColor={currentColor} height='20px' width='30px' className='m-2 p-2' borderRadius='20px' text='Save' color='white' size='lg' onClick={() => {SaveCalendar(source)}}/>
      <Button bgColor={currentColor} height='20px' width='30px' className='m-2 p-2' borderRadius='20px' text='Load' color='white' size='lg' onClick={() => {LoadCalendar(source)}}/>
    </div>
  )
}

export default Calendar