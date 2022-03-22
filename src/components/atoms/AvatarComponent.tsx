import React from 'react'
import Expand from '../../resources/images/arrowExpand.png'
import Avatar from '@mui/material/Avatar'
import '../../styles/Avatar.css'

function AvatarComponent() {
  return (
    <div className="avatar">
      <Avatar sx={{backgroundColor: '#69A6E3'}}>A</Avatar>
      <img src={Expand} alt=""></img>
    </div>
  )
}

export default AvatarComponent
