import React from 'react'

function PendingRectangle() {
  const mainDiv={
    display: 'flex',
    height:'15px'
  }
  const leftDiv={
    width:'25%',
    backgroundColor:'#E1ECFC'
  }
  const rightDiv={
    width:'75%',
    backgroundColor:'#F1F6F4'
  }
  return (
    <div style={mainDiv}>
      <div style={leftDiv} ></div>
      <div style={rightDiv} ></div>
    </div>
  )
}

export default PendingRectangle
