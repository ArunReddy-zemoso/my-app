import React from 'react';
import {Button} from '@mui/material'

import '../../styles/Button.css'
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

type buttonProps={
  text: string;
  val:booktype;
}

function ButtonComponent(props:buttonProps) {
  const handleChange = async (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    const book =props.val;
    book.status= book.status=== 'pending'?'finished':'pending'
    console.log(book);
    
    API.put(`http://localhost:3333/books/${book.id}/`,book);
  }
  return (
    // <div style={{width: '100%',height: '25px',display: 'flex',justifyContent: 'center',margin: '0px 2px',alignItems: 'center'}}>
    //   <Button className='button'><p>{props.text}</p></Button>
    // </div>
    <Button className='button' onClick={handleChange}><p>{props.text}</p></Button>
  )
}

export default ButtonComponent
