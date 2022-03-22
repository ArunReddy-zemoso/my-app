import React from 'react'
import {Typography} from '@mui/material'

type TextProps = {
    text: string;
    isSet:boolean;
}

function TabName(props:TextProps) {
    let color='grey';
    if(props.isSet){
        color='lightgreen';
    }
    const styles={
        color:color,
    }
  return (
    <div>
        <Typography style={styles}>{props.text}</Typography>
    </div>
  )
}

export default TabName
