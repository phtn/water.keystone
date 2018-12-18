import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Palace from '../assets/palace.svg'

const styles = {
  container: {
    height: 50,
    backgroundColor: "#066b98",
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid red',
    width: 'inherit'
  },
  palace: {
    width: 50,
    padding: 20
  },
  brandContainer: {
    // border: '1px solid #ccc',
    padding: 10,
  },
  brand: {
    color: '#eee',
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "1.8em",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: '1px',
    
  },
  links: {
    color: '#ccc',
    textDecoration: 'none',
    fontFamily: "Rajdhani, sans-serif",
    
    height: '100%',
    padding: 20,
    // border: '1px solid tomato',
    float: 'right'
  },
  linksContainer: {
    // border: '1px solid blue',
    width: '100%'
  },
  
}

export default () => {
  const [width, setWidth] = useState(global.innerWidth)
  const [navPad, setNavPad] = useState(100)
  const [brand, setBrand] = useState(true)
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(global.innerWidth)
    global.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)
    if (width > 650){
      handleNavPad(100)
      handleShowBrand(true)

    } else {
      handleNavPad(10)
      handleShowBrand(false)
    }

    return () => global.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])

  const showBrand = (brand) => {
    if(brand){
      return (<h1 style={styles.brand}>Cartesian</h1>)
    } else {
      return null
    }
  }

  return (
    <header>
        <nav style={Object.assign({}, styles.container, { paddingLeft: navPad, paddingRight: navPad})}>
          <div >
            <Link href='/'><a style={styles.palace}><Palace height={20} width={20}/></a></Link>
          </div>
          <div style={styles.brandContainer}>
            <Link href='/'><a style={{textDecoration: 'none'}}>{showBrand(brand)}</a></Link>
          </div>
          <div style={styles.linksContainer}>
            <Link href='/Company'><a style={styles.links}>Company</a></Link>
            <Link href='/Blog'><a style={styles.links}>Blog</a></Link>
            <Link href='/Apps'><a style={styles.links}>Apps</a></Link>
          </div>
        </nav>
      </header>
  )
}