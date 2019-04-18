import React, { Component } from 'react'
import {connect} from 'react-redux'
import axiosWithHeaders from '../../utils/axiosAuth'
import Select from 'react-select'
import {addChild} from '../../ReduxState/actions/parentActions'
import  './AddChild.css'

class AddChild extends Component {
  constructor (props) {
    super(props)
    this.state = {
        name: '',
        pet_name: '',
        pet_experience: 0,
        pet_id: 3,
        oldPets: []
    }
  }
  componentDidMount () {
    axiosWithHeaders()
      .get('https://lambda-gigapet.herokuapp.com/api/pet')
      .then(res => {
        // console.log('pets response', res.data)
        this.setState({ oldPets: res.data })
      })
      .catch(e => {
        console.log('ERROR', e)
      })
  }
  handleSelect = (selectedOption) =>{
    this.setState(prevState =>({
      ...prevState,
        pet_id: selectedOption.value
    }))
    console.log('selected option', selectedOption)
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target, e.target.value)
  }
  addChild = (e)=>{
    e.preventDefault()
    console.log(this.state.addPet)
    const newState = {
      name: this.state.name,
      pet_name: this.state.pet_name,
      pet_experience: 0,
      pet_id: this.state.pet_id
    }
    this.props.addChild(this.props.parent.id, newState)
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
    // eslint-disable-next-line no-unused-vars
    let pet = this.state.oldPets.filter((pet)=>{
       return pet.id === this.state.pet_id ? pet.happy : ''
    })
    // this.state.oldPets.find()
    pet = pet[0]
    // console.log('pet', pet)
    return (
      <div className='register-child-container'>
        <h5>Register Child</h5>
        <div className="add-food-form">
        <form onSubmit={this.addChild}>
          <fieldset>
          {/* <input type='text' onChange={this.handleChange} value={name} name="name" placeholder='Name' /> */}

            <input type='text' onChange={this.handleChange} value={this.state.name} placeholder='Name' name='name' />
            <input type='text' onChange={this.handleChange} value={this.state.pet_name} placeholder='Pet Name' name='pet_name' />
            <Select
              placeholder='Pet'
              className='select-category'
              onChange={this.handleSelect}
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
const mapStateToProps = state =>({
  child: state.ParentReducer.child,
  isAddingChild:  state.ParentReducer.isAddingChild
})

export default connect(mapStateToProps, {addChild})(AddChild)
