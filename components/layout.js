import Head from 'next/head'
import Navbar from './Navbar'

export default ({ children, title = 'Cartesian' }) => (
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
    <Navbar/>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)