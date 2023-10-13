import { useState } from 'react'
import './App.css'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Settings, Add } from '@mui/icons-material'
import styled from '@emotion/styled';
import Leftbar from './components/Leftbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar';

function App() {

  return (
    <Box className='App'>
      <Navbar />
      <Stack direction='row' spacing={2}>
        <Leftbar />
        <Feed />
        <Rightbar />

      </Stack>
    </Box>
  )
}
 
export default App
