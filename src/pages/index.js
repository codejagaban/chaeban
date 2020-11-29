import React, { useState } from 'react'
import DateFnsUtils from '@date-io/dayjs';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const Index = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div className="container">
      <div>
        <div className="card">
        <h3>Profile</h3>
          <p>Hi there, lets set up your account to begin with</p>
          <div>
            <label htmlFor="fullName">Your name</label>
          <input type="text" name="fullName" id="fullName" spellCheck="true" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="Date"></label>
            <KeyboardDatePicker
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={date => handleDateChange(date)}
              format="MMM/DD/YYYY"/>
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
