import React from 'react'
import './Register.css'

const RegisterChild = (props) => {
  return (
    <div className='register-child-container'>
      <h5>Register Child</h5>
      <form>
        <fieldset>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Age' />
          <input type='text' placeholder='Pet Name' />
          <button>Register</button>
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterChild
