import React from 'react'
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
        <div>
          <button onClick={
            () => {
              props.history.push(`/child/${child.id}/progress`)
            }
          }>Track Progress</button>
        </div>
        <img src={`${child.eating}`} alt='' />
      </div>
    </div>
  )
}

export default Pet
