import React, { Component } from 'react'
import RegisterChild from '../RegisterChild/RegisterChild'
import AddFood from '../FoodEntries/AddFood'
import TrackFoodIntake from '../FoodEntries/TrackFoodIntake'

import './AddInfo.css'
class AddInfo extends Component {
  render () {
    return (
      <div className='add-info-container'>
        {this.props.registerStatus
          ? <RegisterChild />
          : <TrackFoodIntake />
        }
        <AddFood />
      </div>
    )
  }
}

export default AddInfo
