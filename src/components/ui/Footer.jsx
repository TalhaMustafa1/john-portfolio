import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div  >
       <footer className='muiContainer flex  align-middle flex-col items-center'>
                <div className='flex flex-row gap-3  '>
                          <FacebookIcon fontSize='large' />
                          <InstagramIcon fontSize='large'/>
                          <TwitterIcon fontSize='large'/>
                          <LinkedInIcon fontSize='large'/>

                </div>
                <br />
                <p className='text-sm'>Copyright ©2020 All rights reserved </p>
       </footer>
    </div>
  )
}

export default Footer
