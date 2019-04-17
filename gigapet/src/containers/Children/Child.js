import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddInfo from '../InfoEntry/AddInfo'
import axiosWithHeaders from '../../utils/axiosAuth'
import TrackFoodIntake from '../FoodEntries/TrackFoodIntake'

export class Child extends Component {
  constructor (props) {
    super(props)
    this.state = {
      child: null
    }
  }
  componentDidMount () {
    const { params } = this.props.match

    this.getFoods(params.id)
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
        })
  }

  

  render () {
    console.log(this.state.child)
    const { child } = this.state
    return (
      <div>
        {child ? child.name : ''}
        <div className='add-info-container'>
        <TrackFoodIntake child={child} />
      </div>
        {/* <AddInfo /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Child)
