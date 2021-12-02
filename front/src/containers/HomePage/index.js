import React from 'react'

// components
import HomePage from '../../components/HomePage'

const HomePageContainer = () => {
  const user = {
    firstName: 'Vitalii',
    lastName: 'Polianychko',
    bDay: '18-02-1997'
  }

  return (
    <HomePage user={user}/>
  )
}

export default HomePageContainer
