import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Palace from '../assets/palace.svg'

const styles = {
  container: {
    height: 50,
    backgroundColor: "#066b98",
    display: 'flex',
    alignItems: 'center'
    // lineHeight: '50px'
  },
  home: {
    width: 100
  },
  links: {
    margin: 10,
    color: '#eee',
    textDecoration: 'none',
    fontFamily: "Rajdhani, sans-serif",
  },
  linksContainer: {
    float: 'right',
    border: '1px solid #ccc',
    // justifyContent: 'left'
  },
  brandContainer: {
    // border: '1px solid #ccc',
    margin: 10
  },
  brand: {
    color: '#eee',
    textDecoration: "none",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "1.8em",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: '1px'
  }
}

console.log(typeof global.innerWidth)


export default () => {
  const [width, setWidth] = useState(global.innerWidth)
  const [navPad, setNavPad] = useState(0)
  const [brand, setBrand] = useState('cartesian')
  

  useEffect(()=> {
    const handleWidthResize = () => setWidth(global.innerWidth)
    global.addEventListener('resize', handleWidthResize)

    const handleNavPad = (pad) => setNavPad(pad)
    const handleShowBrand = (brand) => setBrand(brand)
    if (width > 650){
      handleNavPad(100)
      handleShowBrand('cartesian')

    } else {
      handleNavPad(10)
      handleShowBrand('')
    }

    return () => global.removeEventListener('resize', handleWidthResize)
  }, [width, navPad, brand])

  return (
    <header >
        <nav style={Object.assign({}, styles.container, { paddingLeft: navPad})}>
          <div style={styles.brandContainer}>
            <Link href='/'><a style={styles.home}><Palace height={20} width={20}/></a></Link>
          </div>
          <div style={styles.brandContainer}>
            <Link href='/'><a style={styles.brand}>{brand}</a></Link>
          </div>
          <div style={styles.linksContainer}>
            <Link href='/Apps'><a style={styles.links}>Apps</a></Link>
            <Link href='/Blog'><a style={styles.links}>Blog</a></Link>
            <Link href='/Company'><a style={styles.links}>Company</a></Link>
          </div>
        </nav>
      </header>
  )
}