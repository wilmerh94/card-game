import './NewEventForm.css'
import { useState, useRef } from 'react'
export const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('USA')
  // const title = useRef()
  // const date = useRef()

  const resetForm = () => {
    // title.current.value = ''
    // date.current.value = ''

    setTitle('')
    setDate('')
    setLocation('USA')
  }
  const handleSubmit = e => {
    e.preventDefault()

    const event = {
      // title: title.current.value,
      title: title,
      date: date,
      location: location,
      // date: date.current.value,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          // ref={title}
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type='date'
          // ref={date}
          onChange={e => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select name='' id='' onChange={e => setLocation(e.target.value)}>
          <option value='USA'>USA</option>
          <option value='London'>London</option>
          <option value='Canada'>Canada</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
