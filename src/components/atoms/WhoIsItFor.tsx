import React from 'react'
import {Typography} from '@mui/material'

function WhoIsItFor(props:{text:string}) {
    const styles={
        fontFamily: 'Cera Pro',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#033148",
    }
  return (
    <div>
        <Typography style={styles}>
            {props.text}
        </Typography>
    </div>
  )
}

export default WhoIsItFor
