import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../../App.css'
import { Button } from '@mui/material';
import Pic from '../../assests/images/face-img.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function HeroSection() {
  return (
    <div>
          <Box className='muiContainer md:py-20 md:px-10' >
      <Grid container spacing={2} >
        <Grid item md={6} xs={12}>
          <Item className="heroSection">
          <Box className="heroSection" display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'flex-start'} gap={3}>
      <h2 style={{ color: "#21243d" }} className='text-6xl'>
        Hi, I am John, Creative Technologist
      </h2>
      <p className='text-red-200'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <Button variant="contained" >
        Download Resume
      </Button>
    </Box>
          </Item>
        </Grid>
        <Grid item md={6}xs={12}  className='' >
          <Item className="flex justify-center align-middle shadow-none heroSection"> 
          <img src={Pic} alt="Description of the image" />
          </Item>
        </Grid>

      </Grid>
    </Box>
    </div>
  )
}

export default HeroSection
