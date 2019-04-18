import React, { Component } from 'react'
import Child from './Child'
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
                <div key={i} className='list-container'>
                  <li
                    onClick={() => (
                      history.push(path)
                    )}
                  >{child.child_name}</li>
                  <img src={`${child.happy}`} />
                  <p>Pet Name: {child.pet_name}</p>
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
