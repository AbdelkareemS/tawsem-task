import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import Hero from './components/Hero'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from "./assets/logo.png"
import InformationArea from './components/InformationSection/InformationArea';
import Footer from './components/Footer';

const App = () => {

  const arabicTheme = createTheme({
    direction: "rtl",
    palette: {
      mode: 'light',
      primary: {
        main: '#F7F0E8',
      },
      secondary: {
        main: '#7E7165',
      },
      common: {
        main: "#083F2F"
      },
      text: {
        primary: "#083F2F",
        black: "#111",
        gray: "#494949",
        lightGray: "#C8C8C8"
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={arabicTheme}>
        <ResponsiveAppBar logo={logo} />
        <Hero />
        <InformationArea />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App