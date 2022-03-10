import React from 'react'
import '../../styles/Header.css'
import BlinkistLogoComponent from '../atoms/BlinkistLogoComponent'
import SearchLogo from '../atoms/SearchLogo'
import Explore from '../atoms/Explore'
import MyLibrary from '../atoms/MyLibrary'
import AvatarComponent from '../atoms/AvatarComponent'

function Header() {
  return (
    <div className='header'>
      <div className="left">
          <BlinkistLogoComponent />
          <SearchLogo></SearchLogo>
          <Explore></Explore>
          <MyLibrary></MyLibrary>
        </div>
        <div className="right">
          <AvatarComponent></AvatarComponent>
        </div>
    </div>
  )
}

export default Header
