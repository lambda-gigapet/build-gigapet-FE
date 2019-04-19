import React, { Component } from 'react'
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
        {this.props && this.props.parent.childArray.length > 0 &&
          <ul>
            {this.props.parent.childArray.map((child, i) => {
              const path = `/child/${child.child_id}`
              return (
                <div key={i} className='list-container'>
                  <div className='deleteButton'>

                    <p
                      onClick={
                        () => {
                          this.props.deleteChild(child.child_id)
                        }
                      }
                    >X</p>
                  </div>
                  <li
                    onClick={() => (
                      history.push(path)
                    )}
                  >{child.child_name}</li>
                  <img src={`${child.happy}`} alt='pet emoji' />
                  <p className='petName'>Pet Name: <span>
                    {child.pet_name}
                  </span></p>
                </div>
              )
            })}
          </ul>

          // : <Child child={this.props.parent.childArray[0]} />
        }
        {this.props.parent.childArray.length === 0 && (
          <p>No Children Available</p>
        )}

      </div>
    )
  }
}

export default PickAChild
