import React from 'react'
import {Button} from '@mui/material'

import AddToLibraryText from '../atoms/AddToLibraryText'
import '../../styles/AddToLibraryButton.css'
import API from '../../api'

type booktype = {
  id: number;
  title: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
};

function AddToLibraryButton(props:{val:booktype}) {
  const handleChange = async (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    const book =props.val;
    book['status']='pending';
    console.log(book);
    
    API.put(`http://localhost:3333/books/${book.id}/`,book);
  }

  return (
    <div className='AddToLibrary'>
      <Button className='AddToLibrary' style={{width: '100%', height: '65px'}} onClick={handleChange}>
        <AddToLibraryText />
      </Button>
    </div>
  )
}

export default AddToLibraryButton
