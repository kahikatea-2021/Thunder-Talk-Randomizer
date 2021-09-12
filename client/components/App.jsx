import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import RandomisedList from './RandomisedList'
import Form from './Form'

function App (props) {
  return (
    <>
      <div className='main-container'>
        <div className='grid-container'>
          <div className='filler-left'></div>
          <Route path='/' component={Header} />
          <Route exact path='/' component={Form} />
          <Route path='/random' component={RandomisedList} />
          <Route path='/' component={Footer} />
          <div className='filler-right'></div>
        </div>
      </div>
    </>
  )
}

export default App
