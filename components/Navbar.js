import React from 'react'
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
    padding: 20,
  },
  brand: {
    color: '#eee',
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "1.8em",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: '1px',
    textDecoration: 'none'
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

export default props => {
  const { navPad, brand } = props 

  return (
    <header>
        <nav style={Object.assign({}, styles.container, { paddingLeft: navPad, paddingRight: navPad})}>
          <div >
            <Link href='/'><a style={styles.palace}><Palace height={20} width={20}/></a></Link>
          </div>
          <div style={styles.brandContainer}>
            <Link href='/'><a style={styles.brand}>{brand}</a></Link>
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