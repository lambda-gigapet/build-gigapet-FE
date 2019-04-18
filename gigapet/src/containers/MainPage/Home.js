import React, { Component } from 'react'
import axiosWithHeaders from '../../utils/axiosAuth'
import { connect } from 'react-redux'
import PickAChild from '../Children/PickAChild'
import AddChild from '../Children/AddChild'
import { fetchParent } from '../../ReduxState/actions/parentActions'
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
    this.props.fetchParent(pId)
      .then(() => {
        this.setState({ parent: this.props.parent })
      })
  }

  // findParent = ()=>{
  // }
  render () {
    return (
      <div className='homepage'>
        {this.state.parent
          ? <PickAChild parent={this.state.parent} {...this.props} />
          : 'You have no children right now'
        }
        <AddChild parent={this.state.parent} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parent_id: state.ParentReducer.parent_id,
  parent: state.ParentReducer.parent
})

export default connect(mapStateToProps, { fetchParent })(Home)
