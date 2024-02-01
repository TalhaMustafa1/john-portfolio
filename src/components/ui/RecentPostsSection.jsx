import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function RecentPostsSection() {
    return (
        <div style={{backgroundColor:" #EDF7FA"}} className='py-20 '>

            <Box className='muiContainer '>
            <div className='flex justify-between mb-5'>
                <p className='text-sm'>Recent posts</p>
                <p style={{color:"#00A8CC"}} className='text-xs font-bold'>View all</p>
            </div>
            
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Item className='grid-item'>    <Card className='grid-item' >
                            <CardContent>
                                <h3 className='md:text-2xl font-semibold text-left md:px-1 md:py-4 ' >Making a design system from scratch</h3>
                              <div>
                              <Box className='md:pb-3'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'divider',
      }}
    >
      <p className='text-sm'>12 Feb 2020</p>
      <Divider orientation="vertical" variant="middle" style={{ backgroundColor: '#000000', width:'2px',height:'20px', margin: '0 8px'}}  />
      <p className='text-sm'>Design, Pattern</p>
    </Box>
    <p className='text-xl text-left'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                              </div>

                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card></Item>
                    </Grid>
                    <Grid item md={6}>
                        <Item className='grid-item'>    <Card className='grid-item' >
                            <CardContent>
                                <h3 className='md:text-2xl font-semibold text-left md:px-1 md:py-4 ' >Creating pixel perfect icons in Figma</h3>
                              <div>
                              <Box className='md:pb-3'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'divider',
      }}
    >
      <p className='text-sm'>12 Feb 2020</p>
      <Divider orientation="vertical" variant="middle" style={{ backgroundColor: '#000000', width:'2px',height:'20px', margin: '0 8px'}}  />
      <p className='text-sm'>Design, Pattern</p>
    </Box>
    <p className='text-xl text-left'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                              </div>

                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card></Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default RecentPostsSection
