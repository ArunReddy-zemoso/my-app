import React, { ReactEventHandler } from 'react'
import ReactDom from 'react-dom'

import '../../styles/ExploreComponent.css'
import ExploreHeading from './ExploreHeading'
import ExploreList from './ExploreList'

// type propsType = {
//     open:boolean,
//     close:ReactEventHandler
// }

function ExploreComponent(props){
    if(!props.open) return null;
    
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        
      </div>
      <div className="mainDiv" onClick={props.close}>
        <ExploreHeading />
        <ExploreList />
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ExploreComponent
