import React from 'react'
import {Link} from 'react-router-dom'
import {Typography} from '@mui/material'

import '../../styles/MyLibrary.css'

function MyLibrary() {
  return (
    <Link to="/" >
      <Typography variant='body1' className="myLibrary">
        <span>My Library</span>
      </Typography>
    </Link>
  )
}

export default MyLibrary
