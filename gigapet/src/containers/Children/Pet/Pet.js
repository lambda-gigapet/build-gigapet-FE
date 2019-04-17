import React, { Component } from 'react'

const Pet = (props) =>  {
  
    return (
      <div className="container">
        <div className='pet-container'>
          {this.props.registerStatus
            ? <RegisterChild />
            : <TrackFoodIntake />
          }
        </div>
      </div>
    )
  }
}

export default Pet
