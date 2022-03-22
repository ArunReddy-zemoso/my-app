import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Stack} from '@mui/material';
import ButtonComponent from '../atoms/ButtonComponent'
import {Link} from 'react-router-dom'

import book1 from '../../resources/bookImages/book1.png'
import book2 from '../../resources/bookImages/book2.png'
import book3 from '../../resources/bookImages/book3.png'
import book4 from '../../resources/bookImages/book4.png'
import book5 from '../../resources/bookImages/book5.png'
import book6 from '../../resources/bookImages/book6.png'
import book7 from '../../resources/bookImages/book7.png'
import book8 from '../../resources/bookImages/book8.png'
import book9 from '../../resources/bookImages/book9.png'
import book10 from '../../resources/bookImages/book10.png'
import book11 from '../../resources/bookImages/book11.png'

import ReadTime from '../atoms/readtime/ReadTime'
import Readers from '../atoms/readers/Readers'

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

function getBookById(id: number) {
  switch (id) {
    case 1:
      return book1;
    case 2:
      return book2;
    case 3:
      return book3;
    case 4:
      return book4;
    case 5:
      return book5;
    case 6:
      return book6;
    case 7:
      return book7;
    case 8:
      return book8;
    case 9:
      return book9;
    case 10:
      return book10;
    case 11:
      return book11;
  }
}

export default function Book(props:{val:booktype}) {
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
      <Link to={`/bookdetails/${props.val.id}`} style={{textDecoration:'none'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={getBookById(props.val.id)}
            alt="Book name"
          />
          <CardContent>
            <Typography style={bookNameStyle} gutterBottom variant="h5" component="div">
              {props.val.title}
            </Typography>
            <Typography style={AuthorNameStyle}>
                {props.val.author}
            </Typography>
            <Stack mt={1.5} direction="row" alignItems="center" justifyContent="space-between">
              <ReadTime time={props.val.time} />
              <Readers reads={props.val.reads}/>
            </Stack>
            <ButtonComponent text="Finished" />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
