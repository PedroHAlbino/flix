  import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes,Route, Link} from 'react-router-dom';


const Home = () =>(
  <Box>
    <Typography variant='h3' component="h1">
      Home
    </Typography>
  </Box>
);

const About = () =>(
  <Box>
    <Typography variant='h3' component="h1">
      About
    </Typography>
  </Box>
);

function App() {
  return(
  <ThemeProvider theme={appTheme}>
    <Box 
      component="main"
      sx ={
        {
          height:"100vh",
          backgroundColor:(theme)=> theme.palette.grey[500]
        }
      }
    >
      <Header/>
      <Layout>
        <h1>Rotas</h1>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> }/>
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>  
  )
  
}

export default App;
