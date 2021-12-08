import React from 'react'
import PropTypes from 'prop-types'

const HomePage = ({ user }) => {
  const { firstName, lastName, bDay } = user
  return (
    <div>
      <p>My name is {firstName}</p>
      <p>My last name is {lastName}</p>
      <p>I was born in {bDay}</p>
    </div>
  )
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired
}

export default HomePage
