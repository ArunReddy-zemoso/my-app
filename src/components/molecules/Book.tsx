import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Stack} from '@mui/material';
import Bookimage from '../../images/1.png'
import ButtonComponent from '../atoms/ButtonComponent'

import ReadTime from '../atoms/readtime/ReadTime'
import Readers from '../atoms/readers/Readers'

export default function Book() {
    const cardStyle={
        width:'350px',
        height:'550px',
        border: '1px solid #E1ECFC',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
    }
    const bookNameStyle={
        fontFamily:'Cera Pro',
        fontWeight:'bold',
        fontSize:'23px',
        color:'#033148'
    }
    const AuthorNameStyle={
        fontFamily:'Cera Pro',
        fontWeight:'500',
        fontSize:'18px',
        color:'#6D787E'
    }
    const clockLogoStyle={
        width:'16.67px',
        height:'16.67px',
        color: "#6D787E"
    }
    const timeReadStyle = {
        width: '96px',
        height: '18px',
        fontFamily: 'Cera Pro',
        fontWeight: '400',
        fontSize:'14px',
        color: "#6D787E"
    }
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={Bookimage}
          alt="Book name"
        />
        <CardContent>
          <Typography style={bookNameStyle} gutterBottom variant="h5" component="div">
            Bring Your Human to Work
          </Typography>
          <Typography style={AuthorNameStyle}>
              Erica Keswin
          </Typography>
          <Stack mt={1.5} direction="row" alignItems="center" justifyContent="space-between">
            <ReadTime />
            <Readers />
          </Stack>
          <ButtonComponent />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
