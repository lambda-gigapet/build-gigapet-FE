import React, { Component } from 'react'
import axiosWithHeaders from '../../utils/axiosAuth'

export default class TrackFoodIntake extends Component {
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
    // console.log('clicked',id)
    axiosWithHeaders()
      .post(`https://lambda-gigapet.herokuapp.com/api/child/${id}/entries`, this.state)
        .then(res=>{
          console.log('add food res',res.data)
        })
        .catch(e=>{
          console.log('add food err',e)
        })
  }
  render () {
    const { name, category, meal, quantity } = this.state
    return (
      <div>
        <h5>Track Food Intake</h5>
        <form onSubmit={(e)=>{
           e.preventDefault()
           this.handleSubmit()
           }} >
          <fieldset>
            <input type='text' onChange={this.handleChange} value={name} name="name" placeholder='Name' />
            <input type='text' onChange={this.handleChange} value={meal} name="meal" placeholder='Meal' />
            <input type='text' onChange={this.handleChange} value={category} name="category" placeholder='Category' />
            <input type='text' onChange={this.handleChange} value={quantity} name="quantity" placeholder='Quantity' />
            <button>Feed Pet</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
