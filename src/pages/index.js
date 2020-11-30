import React, { useState } from 'react'
import { KeyboardDatePicker } from '@material-ui/pickers';

const Index = ({ history }) => {
  const [state, setState] = useState({
    fullName: '',
    theme: '',
    message: ''
  })
  const [selectedDate, handleDateChange] = useState(new Date());
  const [select, setSelect] = useState(false);
  const [errors, setErrors] = useState({
    fullNameErr: '',
    themeErr: '',
    selectedDateErr: '',
    messageErr: ''
  })

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
    const validateData = () => {
      errors.fullNameErr = fullName ? '' : "Full name is required";
      errors.themeErr = theme ? '' : 'Please select a theme'
      errors.selectedDateErr = selectedDate ? '' : 'Date is required'
      errors.messageErr = message ? '' : 'Message is required'
      setErrors({
        ...errors
      })
      return Object.values(errors).every(x => x === "")
    }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (validateData()) {
      const data = {
        ...state,
        selectedDate
      }
      history.push({
        pathname: '/summary',
        state: data
      })
    }
  }
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
                  {errors.fullNameErr && <p className="error">{ errors.fullNameErr }</p>}
          </div>
                <div className="form-group">
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
                      <div className="custom-options">
                        <span
                          className="custom-option selected"
                          data-value="hunter-green"
                          onClick={handleThemeSelect}>
                          <span className=" theme hunter-green" />
                          Hunter Green
                        </span>
                        <span
                          className="custom-option"
                          data-value="calm-ui"
                          onClick={handleThemeSelect}>
                          <span className="theme calm-ui" />
                          Calm UI
                        </span>
                        <span
                          className="custom-option"
                          data-value="morning-sun"
                          onClick={handleThemeSelect}>
                          <span className="theme morning-sun" />
                          Morning Sun
                        </span>
                      </div>
                    </div>
                  </div>
                  {errors.themeErr && <p className="error">{ errors.themeErr }</p>}
                </div>
                <div className="form-group">
            <textarea
                    className="form-control"
              name="message"
              id="message"
              cols="30"
                    rows="5"
                    value={message}
              spellCheck="true"
                    onChange={handleInputChange}
              placeholder="Hi, I'd like to say . . . " />
                  {errors.messageErr && <p className="error">{ errors.messageErr }</p>}
            </div>
          </div>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
