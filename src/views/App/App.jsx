import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import Playground from '../Playground/Playground'
import Footer from '../../components/Footer/Footer'

import './app.scss'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Playground />
      <Footer />
    </Fragment>
  )
}

export default App
