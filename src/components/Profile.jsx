import React from 'react'
import NavBar from './NavBar'
const Profile = () => {
  const user = useSelector((store)=> store.user);
  return (
    
    <div>
      <NavBar />
      Profile
      </div>
      
  )
}

export default Profile