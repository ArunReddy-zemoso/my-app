import React from 'react';
import {Button} from '@mui/material'
import '../../styles/Button.css'

function ButtonComponent() {
  return (
    <div style={{width: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
      <Button className='button'>Finished</Button>
    </div>
  )
}

export default ButtonComponent
