import React from 'react'
import '../../styles/Body.css'
import {Routes, Route} from 'react-router-dom'


import Library from '../pages/Library'
import NoMatch from '../molecules/NoMatch'
import CurrentlyReading from './CurrentlyReading'
import FinishedBooks from './FinishedBooks'
import BookDetails from '../pages/bookdetails/BookDetails'
import Entrepreneurship from '../pages/Entrepreneurship'


function Body() {
  return (
    <div className='body'>
      <Routes>
          <Route path="/" element={<Library/>} >
            <Route index element={<CurrentlyReading />} />
            <Route path="reading" element={<CurrentlyReading/>} />
            <Route path="finished" element={<FinishedBooks/>} />
          </Route>
          <Route path="*" element={<NoMatch/>}/>
          <Route path="bookdetails/:bookId" element={<BookDetails/>} />
          <Route path="entrepreneurship" element={<Entrepreneurship />} />
      </Routes>
    </div>
  )
}

export default Body
