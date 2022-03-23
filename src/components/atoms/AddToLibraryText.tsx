import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Typography,Stack} from "@mui/material"

function AddToLibraryText() {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        width="100%"
    >
      <AddIcon />
      <Typography>Add to library</Typography>
    </Stack>
  )
}

export default AddToLibraryText
