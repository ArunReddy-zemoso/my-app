import React from 'react'
import {Typography} from '@mui/material'

export default function Synopsis() {
    const styles={
        fontFamily: 'Cera Pro',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#033148",
    }
  return (
    <div>
      <Typography style={styles}>
      Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
      </Typography>
    </div>
  )
}
