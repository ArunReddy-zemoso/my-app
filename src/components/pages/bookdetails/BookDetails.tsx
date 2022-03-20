import React from 'react'
import {Typography,Box} from '@mui/material'
import { makeStyles} from '@mui/styles'

import ReadTime from "../../atoms/readtime/ReadTime"
import Bookimage from '../../../images/1.png'

const useStyles=makeStyles({
    details:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    text1:{
      width: "auto",
      height: "20px",
      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "20px",
      color: "#03314B",
    },
    bookname:{
      width: "496px",
      height: "45px",
      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    subtitle:{
      width: "509px",
      height: "25px",
      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "25px",
      color: "#03314B",
    },
    authorname:{
      width: "209px",
      height: "20px",
      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#6D787E",
    },
    readtime:{
      padding: "0px",
      margin: "0px",
    },
    inner:{
      display: "flex",
      flexDirection: "row",
    },
    left:{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
    }
});
function BookDetails() {
  const classes=useStyles();
  return (
    <div className={classes.details}>
      <Typography className={classes.text1}>Get the key ideas from</Typography>
      <div className={classes.inner}>
        <div></div>
        <div className={classes.left}>
        <Typography className={classes.bookname}>Beyond Entrepreneurship 2.0</Typography>
        <Typography className={classes.subtitle}>Turning Your Business into an Enduring Great Company</Typography>
        <Typography className={classes.authorname}>By Jim Collins and Bill Lazier</Typography>
        <ReadTime />
        </div>
        <div>
          <Box
          component = 'img'
          sx={{
            height: 304,
            width: 304,
          }}
          alt="book"
          src={Bookimage}
          />
        </div>
      </div>
    </div>
  )
}

export default BookDetails
