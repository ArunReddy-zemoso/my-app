import React from 'react'
import {Grid} from '@mui/material'
import { makeStyles} from '@mui/styles'

import Book from '../molecules/Book'

const useStyles =makeStyles({
  gridContainer: {
    marginTop: '0px',
  },
  book:{
    padding: 0,
    minWidth:"360px",
  },
})

function CurrentlyReading() {
  const classes=useStyles();
  const books=[1,2,3,4,5];
  return (
    <div>
      <Grid container spacing={3} className={classes.gridContainer}>
        {
          books.map((book)=>(
            <Grid className={classes.book} item xs={12} sm={6} md={3}>
              <Book key={book} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default CurrentlyReading
