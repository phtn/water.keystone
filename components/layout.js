import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

export default ({ children, title = 'Cartesian' }) => {

  const getInitialPad = () => {
    if (global.innerWidth > 650){
      return 100
    } else {
      return 10
    }
  }
  const getInitialBrand = () => {
    if (global.innerWidth > 650){
      return 'cartesian'
    } else {
      return ''
    }
  }
  const [width, setWidth] = useState(global.innerWidth)
  const [navPad, setNavPad] = useState(getInitialPad())
  const [brand, setBrand] = useState(getInitialBrand)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(global.innerWidth)
    global.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)

    if (width > 650){
      handleNavPad(100)
      handleShowBrand('Cartesian')
      // global.localStorage.setItem('navPad', 100)
    } else {
      handleNavPad(10)
      handleShowBrand('')
      // global.localStorage.setItem('navPad', 10)
    }

    return () => global.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])


  return (
    <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
      <link href="https://fonts.googleapis.com/css?family=Cinzel:400,700|Abel|Roboto:100,300|Open+Sans:300|IBM+Plex+Sans:700i|Hind:400|Rajdhani" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      body { 
        margin: 0;
      }
    `}</style>
    <Navbar navPad={navPad} brand={brand}/>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
  )
}
  
