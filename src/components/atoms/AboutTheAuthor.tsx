import React from 'react'
import {Typography} from '@mui/material'

function AboutTheAuthor() {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum, rem eveniet mollitia, sit accusantium debitis molestiae perferendis eos numquam cumque. Reprehenderit, fugit quibusdam fugiat molestiae incidunt consequatur nemo dolorem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate modi incidunt corporis eos magnam suscipit, harum illo possimus nemo labore delectus. Doloribus ab aut officia dolorum. Dicta, nihil similique!
        </Typography>
    </div>
  )
}

export default AboutTheAuthor
