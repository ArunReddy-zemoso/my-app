import React from 'react'
import {useState, useEffect} from 'react'
import {Grid, Typography} from '@mui/material'
import { makeStyles} from '@mui/styles'

import Book from '../molecules/Book'
import API from '../../api'

const useStyles =makeStyles({
    gridContainer: {
      marginTop: '40px',
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

function TreandingBlinks() {
    const classes=useStyles();
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
    return (
      <div>
        {books.length > 0 && <Typography style={{height:'30px'}} variant="h4">Treanding blinks</Typography>}
        <Grid container spacing={3} className={classes.gridContainer}>
          {
             books.map((book:booktype)=>{
              if(book.trending){
                return(
                  <Grid key={book.id} className={classes.book} item xs={12} sm={6} md={3}>
                    <Book val={book} />
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </div>
    )
}

export default TreandingBlinks
