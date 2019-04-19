import React, { Component } from 'react'
import './FoodCat.css'
class FoodCat extends Component {
  render () {
    const { food, deleteFood } = this.props
    console.log(food)
    return (
      <div>
        <div className='food-cat-container'>
          <div className='delete'>
            <p onClick={(e) => {
              e.preventDefault()
              deleteFood(food.id)
            }}>X</p>
          </div>
          <h5>{food.category}</h5>
          <p>{food.name}</p>
          <p>{food.quantity}</p>
          <button onClick={() => {
            this.props.updateFood(food.id, food.quantity)
          }}>update</button>
        </div>
      </div>
    )
  }
}

export default FoodCat
