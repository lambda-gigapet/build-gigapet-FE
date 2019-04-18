import React, { Component } from 'react'
import { connect } from 'react-redux'
import axiosWithHeaders from '../../utils/axiosAuth'
import TrackFoodIntake from '../FoodEntries/TrackFoodIntake'
import FoodCategories from '../FoodEntries/FoodCategories';
import {fetchFood} from '../../ReduxState/actions/childActions'
import Pet from './Pet/Pet'
import './Child.css'

export class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {
      child: null,
      FoodCategories: null
    
    }
  }
  componentDidMount () {
    const { params } = this.props.match
    this.props.fetchFood(params.id)
    axiosWithHeaders()
      .get(`https://lambda-gigapet.herokuapp.com/api/child/${params.id}`)
      .then(res => {
        console.log('child res', res.data)
        this.setState({ child: res.data })
      })
      .catch(e => {
        console.log('Child res error', e)
      })
  }

  getFoods = (id)=>{
    axiosWithHeaders()
      .get(`https://lambda-gigapet.herokuapp.com/api/child/${id}/entries`)
        .then(res=>{
          console.log('child food res', res.data)
          this.setState({FoodCategories: res.data})
        })
  }

  

  render () {
    console.log('foodEntries prop: ', this.props.FoodEntries)
    const { child } = this.state
    return (
      <div className="child-container">
      <h5>
        {child ? child.name : ''}
      </h5>
        <div className='add-info-container'>
        <TrackFoodIntake child={child} />
        <FoodCategories child={child} foodEntries={this.props.foodEntries} />
      </div>
      <div className="pet-progress">
        <Pet child={child} />
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.ChildReducer.isFetching,
  foodEntries: state.ChildReducer.foodEntries,
})



export default connect(mapStateToProps, {fetchFood})(Child)
