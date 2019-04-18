import React, { Component } from 'react'
import AddInfo from '../InfoEntry/AddInfo'
import axiosWithHeaders from '../../utils/axiosAuth'
import { connect } from 'react-redux'
import Child from '../Children/Child'
import PickAChild from '../Children/PickAChild'
import TrackFoodIntake from '../FoodEntries/TrackFoodIntake';
import AddChild from '../Children/AddChild'
import './Home.css'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      parent: null
    }
  }
  componentDidMount () {
    // this.setState({ parent_id: this.props.parent_id })
    // console.log(this.state.parent_id)
    const pId = localStorage.getItem('p_id')
    axiosWithHeaders()
      .get(`https://lambda-gigapet.herokuapp.com/api/parent/${pId}`)
      .then(res => {
        console.log('api res',res.data)
        this.setState({parent: res.data})
      })
      .catch(e => {
        console.log(e)
      })
  }
  
  findParent = ()=>{
  }
  render () {
    console.log('home page',this.state.parent)
    return (
      <div className="homepage">
        {this.state.parent ? 
        <PickAChild parent={this.state.parent} {...this.props} />
        :
        'You have no children right now'
      }
        <AddChild parent={this.state.parent} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parent_id: state.ParentReducer.parent_id
})

export default connect(mapStateToProps, {})(Home)
