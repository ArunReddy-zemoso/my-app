import React from 'react'
import {Typography,Box,Button,Tabs,Tab} from '@mui/material'
import { makeStyles} from '@mui/styles'
import {useParams} from 'react-router-dom'

import ReadTime from "../../atoms/readtime/ReadTime"
import Synopsis from '../../atoms/Synopsis'
import WhoisItFor from '../../atoms/WhoIsItFor'
import AboutTheAuthor from '../../atoms/AboutTheAuthor'

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
      margin:"25px 0",
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
      marginBottom:"20px",
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
      marginBottom:"20px",
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
      marginBottom:"20px",
    },
    readtime:{
      padding: "0px",
      margin: "0px",
    },
    inner:{
      display: "flex",
      flexDirection: "row",
    },
    lefttop:{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
    },
    left:{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"space-between",
      height:"304px",
      marginRight:"70px",
    },
    leftbottom:{
      display:"flex",
      flexDirection:"row",
      alignItems:"space-between",
      justifyContent:"center"
    },
    readnow:{
      width: "150px",
      height: "50px",

      /* Body 1 */

      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",

      /* Text/green */

      color: "#22C870",


      /* Inside auto layout */

      flex: "none",
      order: "1",
      flexGrow: "0",
      margin: "0px 8px",
    },
    finishedreading:{
      fontSize: "14px",

      width: "170px",
      height: "50px",

      /* Green */

      background:" #2CE080",
      borderRadius: "4px",
      flex: "none",
      order: "1",
      flexGrow: "0",
      margin: "0px 8px",
    },
    sendtokindle:{
      width: "155px",
      height: "50px",
      fontFamily: 'Cera Pro',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#6D787E",
      flex: "none",
      order: "2",
      flexGrow: "0",
      margin: "0px 8px",
    },
    tabs: {
      width:"auto",
      marginTop:"30px",
      marginBottom:"20px",
    },
    tab:{
      width:"250px"
    },
});

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

function BookDetails() {
  const params=useParams();
  const bookId= params.bookId;
  console.log(bookId);
  
  const data=require('../../../data/db.json')
  const book = data['books'].filter((Book:booktype) => Book.id.toString() === bookId);
  const image=require(`../../../resources/bookImages/book${bookId}.png`)
  console.log(book);
  console.log(book[0].title);
  

  const classes=useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, selectedTab: number) => {
    setSelectedTab(selectedTab);
  };
  return (
    <div className={classes.details}>
      <Typography className={classes.text1}>Get the key ideas from</Typography>
      <div className={classes.inner}>
        <div className={classes.left}>
          <div className={classes.lefttop}>
          <Typography className={classes.bookname}>{book[0].title}</Typography>
          <Typography className={classes.subtitle}>Turning Your Business into an Enduring Great Company</Typography>
          <Typography className={classes.authorname}>{book[0].author}</Typography>
          <ReadTime time={book[0].time}/>
          </div>
          <div className={classes.leftbottom}>
            <Button className={classes.readnow} variant="outlined">Read now</Button>
            <Button className={classes.finishedreading} variant="contained">Finished Reading </Button>
            <Button className={classes.sendtokindle} variant="text">send to kindle</Button>
          </div>
        </div>
        <div>
          <Box
          component = 'img'
          sx={{
            height: 304,
            width: 304,
          }}
          alt="book"
          src={image}
          />
        </div>
      </div>
      <div style={{width: '50%'}}>
        <Tabs className={classes.tabs} value={selectedTab} onChange={handleChange} variant="scrollable" scrollButtons={false}>
          <Tab className={classes.tab} label="Synopsis" value={0} />
          <Tab className={classes.tab} label="Who is it for?" value={1} />
          <Tab className={classes.tab} label="About the author" value={2} />
        </Tabs>
        {selectedTab===0 && <Synopsis text={book[0].synopsis}/>}
        {selectedTab===1 && <WhoisItFor text={book[0].for} />}
        {selectedTab===2 && <AboutTheAuthor text={book[0].aboutAuthor} />}
      </div>
    </div>
  )
}

export default BookDetails
