import React from 'react'
import {Typography} from '@mui/material'
import {Tabs,Tab} from '@mui/material'
import { makeStyles} from '@mui/styles'


import '../../styles/Library.css'
import {COLORS} from '../../constants'
import CurrentlyReading from '../organisms/CurrentlyReading'
import FinishedBooks from '../organisms/FinishedBooks'
import TabName from '../atoms/TabName'

const useStyles =makeStyles({
  tabs:{
    margin:"0px 0",
    borderBottom:"1px solid grey",
  },
  tab:{
    color:"grey",
    display:"flex",
    alignItems:"flex-start",
    width:"400px",
  },
  heading:{
    width: "300px",
    height: "65px",

    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "56px",
    color: "#03314B",
    marginBottom:"50px",
  }
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



export default function Library() {

  const classes=useStyles();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, selectedTab: number) => {
    setSelectedTab(selectedTab);
  };

  return (
    <>
      <Typography className={classes.heading} >My Library</Typography>
      <Tabs className={classes.tabs} value={selectedTab} onChange={handleChange} TabIndicatorProps={{
        style:{
          backgroundColor:COLORS.LIGHT_GREEN,
        }
      }}>
        <Tab className={classes.tab} label={<TabName text="Currently reading" isSet={selectedTab===0} />} value={0} />
        <Tab className={classes.tab} label={<TabName text="Finished" isSet={selectedTab===1} />} value={1} />
      </Tabs>
      {/* <ExploreComponent text="arun"/> */}
      {selectedTab === 0 && <CurrentlyReading />}
      {selectedTab === 1 && <FinishedBooks />}
    </>
  );
}

