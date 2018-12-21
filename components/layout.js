import { useState, useEffect, Children, cloneElement } from 'react'
import Head from 'next/head'
import Navbar from './navbar'

export default ({ children, title = 'Watr' }) => {

  const getInitialPad = () => {
    if (global.innerWidth > 650){
      return 100
    } else {
      return 10
    }
  }
  const getInitialBrand = () => {
    if (global.innerWidth > 650){
      return 'Watr'
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
      handleShowBrand('Watr')
    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => global.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])
  
  const childrenWithProps = Children.map(children, child => cloneElement(child, {nav: navPad}))

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
        background-color: #f4f7f8;
      }
    `}</style>
    <Navbar navPad={navPad} brand={brand}/>
    
      { childrenWithProps }

    <footer>
      {''}
    </footer>
  </div>
  )
}
  
