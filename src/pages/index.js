import React, { useState } from 'react'
import DateFnsUtils from '@date-io/dayjs';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const Index = ({ history }) => {
  const [state, setState] = useState({
    fullName: '',
    theme: '',
    message: ''
  })
  const [selectedDate, handleDateChange] = useState(new Date());

  //*handle the click of the custom select
  const handleSelect = () => {
    setSelect(!select)
  }
  // *Input Change event
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state, [name] : value})
  }
  const {
    fullName,
    date,
    theme,
    message
  } = state
  const handleThemeSelect = (e) => {
    const selectedTheme = e.target.dataset.value;
    setState({...state, theme: selectedTheme})
  }
    // validates the inputs before sending an action
  return (
    <div className="container">
      <div className="content">
        <div className="col">
          <div className="info">
            <h1>Show a message</h1>
            <p>Hi there, kindly fill the form to generate a message with a theme of your choice.</p>
          </div>
        </div>
        <div className="col">
        <div className="card">
            <form onSubmit={onFormSubmit} className="form">
              <div className="form-content">
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    spellCheck="true"
                    placeholder="Your Name"
                    value={fullName}
                    onChange={handleInputChange}
                    className="form-control" />
          </div>
          <div>
            <label htmlFor="Date"></label>
            <KeyboardDatePicker
              clearable
                    className="form-control"
                    value={date}
                    placeholder="Date ..."
                    name="date"
              onChange={date => handleDateChange(date)}
                    format="MMM/DD/YYYY" />
                   {errors.fullNameErr && <p className="error">{ errors.fullNameErr }</p>}
                </div>
                <div className="form-group">
                  <div
                    className="custom-select-wrapper"
                    onClick={handleSelect}
                  >
                    <div className={`custom-select ${select ? 'open' : ''}`}>
                      <div
                        className="custom-select__trigger">
                        <span>{theme ? theme : 'Pick a theme'}</span>
                        <div className="arrow"/>
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              spellCheck="true"
              placeholder="Hi, I'd like to say . . . " />
          </div>
          <div>
            <label htmlFor="theme">Theme</label>
            <div class="custom-select-wrapper">
              <div class="custom-select">
                <div class="custom-select__trigger"><span>Tesla</span>
                  <div class="arrow"></div>
                </div>
                <div class="custom-options">
                  <span
                    class="custom-option selected"
                    data-value="tesla">Tesla</span>
                  <span class="custom-option" data-value="volvo">Volvo</span>
                  <span class="custom-option" data-value="mercedes">Mercedes</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
