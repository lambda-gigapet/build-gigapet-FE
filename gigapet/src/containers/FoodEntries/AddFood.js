import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import './AddFood.css'

const options = [
  { value: 'Fruits', label: 'Fruits' },
  { value: 'Vegetables', label: 'Vegetables' },
  { value: 'Fats and Oils', label: 'Fats and Oils' },
  { value: 'Meat', label: 'Meat' },
  { value: 'Dairy', label: 'Dairy' },
  { value: 'Treats', label: 'Treats' }
]

export default class AddFood extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: null
    }
  }

  handleChange = (selectedOption)=>{
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render () {
    return (
      <div className='add-food'>
        <div className='food-intake'>
          <form className='add-food-form'>
            <h5>Food Category</h5>
              <Select
                isMulti
                placeholder='Category'
                className='select-category'
                onChange={this.handleChange}
                options={options}
                classNamePrefix="select"
                components={makeAnimated()}
            />
          </form>
        </div>
      </div>
    )
  }
}
