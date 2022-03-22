import React from 'react'
import {Link} from 'react-router-dom'

import '../../styles/MyLibrary.css'

function MyLibrary() {
  return (
    <div className='myLibrary'>
      <Link to="/" style={{textDecoration:'none'}}>
        <p>My Library</p>
      </Link>
    </div>
  )
}

export default MyLibrary
