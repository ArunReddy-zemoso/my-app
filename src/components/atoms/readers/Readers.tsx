import React from 'react'
import {Stack} from '@mui/material'

import userLogo from '../../../images/user.png'
function Readers() {
    const clockLogoStyle={
        width:'16.67px',
        height:'16.67px',
        color: "#6D787E"
    }
    const timeReadStyle = {
        width: '96px',
        height: '18px',
        fontFamily: 'Cera Pro',
        fontWeight: '400',
        fontSize:'14px',
        color: "#6D787E"
    }
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <img style={clockLogoStyle} src={userLogo} alt="" />
                <p style={timeReadStyle}>1.9k reads</p>
        </Stack>
    </div>
  )
}

export default Readers
