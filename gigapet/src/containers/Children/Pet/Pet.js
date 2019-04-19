import React, { Component } from 'react'
import './Pet.css'

const Pet = (props) => {
  const { child } = props
  console.log(child ? child.happy : 'no child')
  if (!child) {
    return 'waiting for child'
  }
  return (
    <div className='container'>
      <div className='pet-container'>
        {/* {this.props.registerStatus
          ? <RegisterChild />
          : <TrackFoodIntake />
        } */}
        <h1>PET</h1>
        <img src={`${child.eating}`} alt='' />
        <img src={`${child.happy}`} alt='' />
        <img src={`${child.ok}`} alt='' />
        <img src={`${child.sad}`} alt='' />
        <img src={`${child.sick}`} alt='' />
      </div>
    </div>
  )
}

export default Pet
