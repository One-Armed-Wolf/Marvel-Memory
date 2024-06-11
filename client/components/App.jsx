import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import Cards from './Cards'

function App () {

  const state = useSelector(state => state.card)


  return (
    <div className='app-container'>
      <h1 className='app-title'>Hello World!</h1>
      <Cards/>
    </div>
  )
}

export default App
