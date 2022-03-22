import React from 'react'

import BannerImage from '../../resources/BannerImage.png'
import BannerText from './BannerText'
import {COLORS} from "../../constants"

import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
  banner:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minHeight: '350px',
    padding: "50px",
    margin: 0,
    backgroundColor:COLORS.MINT_CREAM,
  },
});
function Banner() {
  const classes=useStyles();
  return (
    <div className={classes.banner}>
      <BannerText />
      <img src={BannerImage} alt='banner' width="25%" />
    </div>
  )
}

export default Banner
