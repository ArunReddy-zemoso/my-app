import React from 'react'
import {Stack} from '@mui/material'

import clock from '../../../images/clock.png'

function ReadTime() {
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
            <img style={clockLogoStyle} src={clock} alt="" />
            <p style={timeReadStyle}>13-minute read</p>
        </Stack>
    </div>
  )
}

export default ReadTime
