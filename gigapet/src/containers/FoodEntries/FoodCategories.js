import React, { Component } from 'react'
import { connect } from 'react-redux'
import FoodCat from './FoodCat'
import { DeleteFood, fetchFood, updateFoodQuantity } from '../../ReduxState/actions/childActions'
import './FoodCategories.css'

// import { increment, decrement } from '../actions'

class FoodCategories extends Component {
  handleDelete = (id)=>{
    const { id: childId } = this.props.child
    this.props.DeleteFood(id)
    this.props.fetchFood(childId)
  }
  
  updateFood = (id,quantity)=>{
    const { id: childId } = this.props.child
    let newQ = quantity + 1
    this.props.updateFoodQuantity(id, newQ)
    this.props.fetchFood(childId)
  }
  render () {
    return (
      <div className="all-foods">
      <h5>
          Food Categories
      </h5>
        {this.props.foodEntries && this.props.foodEntries.length > 0 && this.props.foodEntries.map((food, i) => {
          return <FoodCat key={i} food={food} deleteFood={this.handleDelete} updateFood={this.updateFood}/>
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    foodEntries: state.ChildReducer.foodEntries,
    isDeleting: state.ChildReducer.isDeleting
  }
}

export default connect(mapStateToProps, { DeleteFood, fetchFood, updateFoodQuantity })(FoodCategories)
