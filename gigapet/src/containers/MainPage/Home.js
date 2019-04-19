import React, { Component } from 'react'
import { connect } from 'react-redux'
import PickAChild from '../Children/PickAChild'
import AddChild from '../Children/AddChild'
import { fetchParent, DeleteChild } from '../../ReduxState/actions/parentActions'
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

  componentDidUpdate (prevProps) {
    if (this.props.isAddingChild !== prevProps.isAddingChild) {
      console.log('isAddingChild has changed!')
      // what do you want to do here
      if (!this.props.isFetchingParent ) {
        console.log(`We're fetching data now`)
        this.props.fetchParent(localStorage.getItem('p_id'))
          .then(() => {
            this.setState({ parent: this.props.parent })
          })
      }
    }
  //   return prevProps.parent !== this.props.parent
  }

  // findParent = ()=>{
  // }

  deleteChild = (id)=>{
    this.props.DeleteChild(id)
    .then(()=>{
      this.props.fetchParent(localStorage.getItem('p_id'))
    })
  }

  render () {
    return (
      <div className='homepage'>
        {this.state.parent
          ? <PickAChild parent={this.state.parent} {...this.props} deleteChild={this.deleteChild}/>
          : 'You have no children right now'
        }
        <AddChild parent={this.state.parent} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parent_id: state.ParentReducer.parent_id,
  parent: state.ParentReducer.parent,
  isFetchingParent: state.ParentReducer.isFetchingParent,
  isAddingChild: state.ParentReducer.isAddingChild,
  isDeletingChild: state.ParentReducer.isDeletingChild
})

export default connect(mapStateToProps, { fetchParent, DeleteChild })(Home)
