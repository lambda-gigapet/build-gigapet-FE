import React from 'react'
import AddInfo from '../InfoEntry/AddInfo'

const Home = (props) => {
  return (
    <div>
        welcome Home
      <AddInfo registerStatus={props.registerStatus} />
    </div>
  )
}

export default Home
