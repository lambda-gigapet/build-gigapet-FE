import React, { Component } from 'react'
import {connect } from 'react-redux'
import {AddFood, fetchFood} from '../../ReduxState/actions/childActions'

class TrackFoodIntake extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      quantity: 0,
      meal: '',
      category: ''
    }
  }

  handleChange =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = ()=>{
    // e.preventDefault()
    const {id} = this.props.child
    const newFood = {
      ...this.state,
      child_id: id,
      date_added: new Date(Date.now()).toISOString(),
      date_update: new Date(Date.now()).toISOString(),
      quantity: parseInt(this.state.quantity, 10)
    }
    // console.log('clicked',id)
    this.props.AddFood(id, newFood)
    this.props.fetchFood(id)
  }
  render () {
    const { name, category, meal, quantity } = this.state
    return (
      <div className='track-food'>
        <h5>Track Food Intake</h5>
        <form onSubmit={(e)=>{
           e.preventDefault()
           this.handleSubmit()
           }} >
          <fieldset>
            <input type='text' onChange={this.handleChange} value={name} name="name" placeholder='Name' />
            <input type='text' onChange={this.handleChange} value={meal} name="meal" placeholder='Meal' />
            <input type='text' onChange={this.handleChange} value={category} name="category" placeholder='Category' />
            <input type='number' onChange={this.handleChange} value={quantity} name="quantity" placeholder='Quantity' />
            <button>Feed Pet</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAddingFood: state.ChildReducer.isAddingFood,
})


export default connect(mapStateToProps, {AddFood, fetchFood})(TrackFoodIntake)