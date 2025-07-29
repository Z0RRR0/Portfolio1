import React, {useEffect, useState} from 'react'
import {Header, Footer, ThemeBtn, ThemeProvider} from './components'
import { Outlet } from 'react-router-dom'

function Layout() {
  let [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }

  const darkTheme = () => {
    setThemeMode("dark")
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }

  // actual change in theme

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      darkTheme();
    } else {
      lightTheme();
    }

    // document.querySelector('html').classList.remove('light', 'dark')
    // document.querySelector('html'). classList.add('theme')
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <Header />
        <Outlet />
        <Footer />
    </ThemeProvider>
  )
}

export default Layout