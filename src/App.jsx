import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import { Settings, Add } from '@mui/icons-material'
import styled from '@emotion/styled';

function App() {
  const [count, setCount] = useState(0);
  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue'
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  })

  return (
    <div className='App'>
      <Button variant='text'>Text</Button>
      <Button startIcon={<Settings />} variant='contained' color='secondary' size='small'>Settings</Button>
      <Button startIcon={<Add />} variant='contained' color='success' size='small'>Add post</Button>
      <Button variant='outlined' disabled>Outlined</Button>
      <BlueButton>Styled button</BlueButton>
    </div>
  )
}

export default App
