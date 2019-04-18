import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import axiosWithHeaders from '../../utils/axiosAuth'
import Select from 'react-select'
import  './AddChild.css'

class AddChild extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addPet: {
        name: '',
        pet_name: '',
        pet_experience: 0,
        pet_id: 3
      },
      oldPets: []
    }
  }
  componentDidMount () {
    axiosWithHeaders()
      .get('https://lambda-gigapet.herokuapp.com/api/pet')
      .then(res => {
        console.log('pets response', res.data)
        this.setState({ oldPets: res.data })
      })
      .catch(e => {
        console.log('ERROR', e)
      })
  }

  handleChange = (selectedOption)=>{
    this.setState({addPet: {
        ...this.state.addPet,
        pet_id: selectedOption.value
    } });
    console.log(`Option selected:`, selectedOption);
  }

  render () {
    let options = []
    this.state.oldPets.map((pet) => {
      const petOpts = {
        value: pet.id,
        label: pet.species
      }
      return options.push(petOpts)
    })
    let pet = this.state.oldPets.filter((pet)=>{
       return pet.id === this.state.addPet.pet_id ? pet.happy : ''
    })
    // this.state.oldPets.find()
    pet = pet[0]
    console.log('pet', pet)
    return (
      <div className='register-child-container'>
        <h5>Register Child</h5>
        <div className="add-food-form">
        <form>
          <fieldset>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Age' />
            <input type='text' placeholder='Pet Name' />
            <Select
              placeholder='Category'
              className='select-category'
              onChange={this.handleChange}
              options={options}
              classNamePrefix='select'
              />
            <button>Register</button>

          </fieldset>
        </form>
              </div>
      </div>
    )
  }
};

export default AddChild
