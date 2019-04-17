import React, { Component } from 'react'

export default class TrackFoodIntake extends Component {
  render () {
    return (
      <div>
        <h5>Track Food Intake</h5>
        <form >
          <fieldset>
            <input type='text' placeholder='Breakfast' />
            <input type='text' placeholder='Lunch' />
            <input type='text' placeholder='Dinner' />
            <button>Track Food Intake</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
