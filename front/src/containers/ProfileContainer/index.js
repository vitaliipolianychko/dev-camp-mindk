import React from 'react'

// components
import Profile from '../../components/Profile'

const HomePageContainer = () => {
  const user = {
    firstName: 'Vitalii',
    lastName: 'Polianychko',
    bDay: '18-02-1997'
  }

  return (
    <Profile user={user}/>
  )
}

export default HomePageContainer
