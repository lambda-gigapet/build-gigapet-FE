import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Child from './Child'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import TrackFoodIntake from '../FoodEntries/TrackFoodIntake'
import './PickAChild.css'

class PickAChild extends Component {
  render () {
    // const oneChild = this.props.parent.childArray[0]
    const { history } = this.props
    return (
      <div className='children-list'>
        <h5>
              Choose a child
        </h5>
        {this.props.parent.childArray.length > 1
          ? <ul>
            {this.props.parent.childArray.map((child, i) => {
              const path = `/child/${child.child_id}`
              return (
                <div>

                  <li key={i}
                    onClick={() => (
                      history.push(path)
                      // this.props.history.push(path)
                      // <Child child={child} />
                      // <PrivateRoute path={path} child={child} component={Child} />
                    )}
                  >{child.child_name}</li>
                </div>
              )
            })}
          </ul>

          : <Child child={this.props.parent.childArray[0]} />
        }

      </div>
    )
  }
}

export default PickAChild
