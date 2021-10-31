import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components'
import background from '../headers/icon/greyback1.jpg';


const HoverButton = styled(Button)`
    &:hover svg path {
        color: white;
    }
`
const HoverButton1 = styled(Button)`
    &:hover svg path {
        color: #5BD7FF;
    }
`
const HoverButton2 = styled(Button)`
    &:hover .image {
        color: #5BD7FF;
    }
`


export default function Footer() {


  return (
    <AppBar className='footer' position="static" style={{ backgroundImage: `url(${background})` }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            Copyright © 2021 Shiran Ridel Inc. All rights reserved.
          </Typography>
          <HoverButton
            style={{ left: "10%" }} target="_blank" href="https://github.com/ShiranRidel">
            <GitHubIcon style={{ color: "rgb(193, 166, 166)" }} ></GitHubIcon>
          </HoverButton
          >
          <HoverButton1
            style={{ left: "10%" }} target="_blank" href="https://www.linkedin.com/in/shiran-ridel-48b457169">
            <LinkedInIcon style={{ color: "rgb(193, 166, 166)" }} ></LinkedInIcon>
          </HoverButton1
          >
        </Toolbar>

      </Container>
    </AppBar>
  )
}