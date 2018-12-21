import Particles from 'react-particles-js'

const styles = {
  container: {
    height: "100%",
    backgroundColor: '#333'
  },
  hero: {
    position: "absolute",
    // top: 110,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 300,
    fontSize: 40,
    color: "#eee",
    textTransform: "uppercase",
    letterSpacing: 3
  },
  sub: {
    position: "absolute",
    top: 160,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    color: "#ffd454",
    textTransform: "uppercase",
    letterSpacing: 2
  }
}

export default props => {
  const { nav } = props
  return (
    <div style={styles.container}>
      <Particles
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            color: {
              value: "#066b98"
            },
            line_linked: {
              enable: false,
              distance: 200,
              opacity: 0.1
            },
            move: {
              direction: "right",
              speed: 0.09
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 7,
                distance: 100
              }
            }
          },
          retina_detect: true
        }}
      />
      <h1 style={Object.assign({}, styles.hero, {top: nav === 100 ? 160 : 110})}>Watr</h1>
      <h3 style={Object.assign({}, styles.sub, {top: nav === 100 ? 210 : 160})}>Filtration Systems</h3>
    </div>
  )
}