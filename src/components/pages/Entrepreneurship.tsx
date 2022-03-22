import React from 'react'
import {Stack} from '@mui/material'

import Banner from '../molecules/Banner'
import SearchBar from '../molecules/SearchBar'
import TreandingBlinks from '../organisms/TreandingBlinks'
import JustAddedBlinks from '../organisms/JustAddedBlinks'
import FeaturedAudioBlinks from '../organisms/FeaturedAudioBlinks'

function Entrepreneurship() {
    return (
        <Stack
          direction="column"
          spacing={5}
          sx={{
            paddingTop: "10px",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          <Banner />
          <SearchBar />
          <TreandingBlinks />
          <JustAddedBlinks />
          <FeaturedAudioBlinks />
        </Stack>
      );
}

export default Entrepreneurship
