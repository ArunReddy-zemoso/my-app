import React from 'react'
import {Typography} from '@mui/material'
import {Tabs,Tab} from '@mui/material'
import { makeStyles} from '@mui/styles'

import '../../styles/Library.css'
import CurrentlyReading from '../organisms/CurrentlyReading'
import FinishedBooks from '../organisms/FinishedBooks'

const useStyles =makeStyles({
  tabs:{
    margin:"0px 0",
    borderBottom:"2px solid grey",
  },
  tab:{
    color:"grey",
    display:"flex",
    alignItems:"flex-start",
    width:"400px",
  },
  heading:{
    width: "300px",
    height: "45px",

    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    color: "#03314B",
  }
})





export default function Library() {

  const classes=useStyles();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, selectedTab: number) => {
    setSelectedTab(selectedTab);
  };

  return (
    <>
      <Typography className={classes.heading} variant="h4">My Library</Typography>
      <Tabs className={classes.tabs} value={selectedTab} onChange={handleChange} >
        <Tab className={classes.tab} label="Currently reading" value={0} />
        <Tab className={classes.tab} label="Finished" value={1} />
      </Tabs>
      {selectedTab === 0 && <CurrentlyReading />}
      {selectedTab === 1 && <FinishedBooks />}
    </>
  );
}

