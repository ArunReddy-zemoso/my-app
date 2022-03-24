import React from 'react'
import {useState} from 'react'
import arrorExpand from '../../resources/images/arrowExpand.png'
import '../../styles/Explore.css'

import ExploreComponent from '../molecules/ExploreComponent'

function Explore() {
  const [isExploreOpen,setIsExploreOpen]=useState(false);
  function closeExplore(){
    setIsExploreOpen(!isExploreOpen);
  }
  return (
    <div className='explore' onClick={closeExplore}>
        <p>Explore</p>
        <img src={arrorExpand} alt="Expand"></img>
        <ExploreComponent open={isExploreOpen} close={closeExplore}/>
    </div>
  )
}

export default Explore
