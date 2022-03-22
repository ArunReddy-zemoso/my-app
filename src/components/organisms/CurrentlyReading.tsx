import React from 'react'
import {useState, useEffect} from 'react'
import {Grid} from '@mui/material'
import { makeStyles} from '@mui/styles'

import Book from '../molecules/Book'
import API from '../../api'

const useStyles =makeStyles({
  gridContainer: {
    marginTop: '0px',
  },
  book:{
    padding: 0,
    minWidth:"360px",
  },
})

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

function CurrentlyReading() {
  const[books,setBooks] =useState([]);

  const fetchBooksData=async () =>{
    const response = await API.get("books");
    return response.data;
  };

  useEffect(() => {
    async function getBooks(){
      const fetchedBooks = await fetchBooksData();
      setBooks(fetchedBooks);
    }
    getBooks();
  })

  const classes=useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.gridContainer}>
        {
          books.map((book:booktype)=>{
            if(book.status === 'pending'){
              return(
                <Grid key={book.id} className={classes.book} item xs={12} sm={6} md={3}>
                  <Book val={book} />
                </Grid>
              )
            }
          })
          //books.filter(check) //takes moretime to load
        }
      </Grid>
    </div>
  )
}

// function check(book:booktype){
//   return book.status === 'pending';
// }

export default CurrentlyReading
