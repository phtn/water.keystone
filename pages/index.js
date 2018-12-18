import Layout from '../components/layout'
import Particles from 'react-particles-js'
const styles = {
  container: {
    height: "100%",
    backgroundColor: '#333'
  }
}
export default () => (
  <Layout>
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
    </div>
  </Layout>
  )
