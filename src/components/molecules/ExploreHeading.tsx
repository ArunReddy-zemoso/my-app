import {Stack,Typography} from '@mui/material'

export default function ExploreHeading() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        color: "#6D787E",
        borderBottom: '1px solid grey',
        height:'50px',
      }}
    >
      <Typography variant='h5' >Explore by category</Typography>
      <Typography variant='h5'>See recently added titles </Typography>
      <Typography variant='h5'>See popular titles</Typography>
    </Stack>
  );
}