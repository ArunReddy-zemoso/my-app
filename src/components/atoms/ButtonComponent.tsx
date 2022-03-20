import React from 'react';
import {Button} from '@mui/material'
import '../../styles/Button.css'

function ButtonComponent() {
  return (
    <div style={{width: '100%',height: '40px',display: 'flex',justifyContent: 'center',margin: '0px 2px',alignItems: 'center'}}>
      <Button className='button'><p>Finished</p></Button>
    </div>
  )
}

export default ButtonComponent
