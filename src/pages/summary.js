import React from 'react'
import dayjs from 'dayjs';

const Summary = ({ location, history }) => {
  // *pull the passed data from the current location
  const { fullName, message, date }  = location.state
  return (
    <div className="container">
      <div className="content justify-center">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <blockquote>
                <p>{ message }</p>
              </blockquote>
            </div>
            <div className="card-footer calm-ui">
              <h3> - { fullName } </h3>
              <p>{ dayjs(date).format('MMM DD,YYYY') }</p>
            </div>
          </div>
          <div className="btn-group">
          <button type="" className="btn" onClick={() => history.goBack()}>Back</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Summary
