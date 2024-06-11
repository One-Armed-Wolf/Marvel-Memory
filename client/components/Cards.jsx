import React, {useEffect} from 'react'

import { useSelector , useDispatch } from 'react-redux'
import Card from './Card'
import {allFlip, allUnFlip} from '../Actions'

function Cards () {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.card)

  useEffect( () => {
    dispatch(allFlip())
    setTimeout(()=> {
      dispatch(allUnFlip())
    } , 3000)
  } , [])
  
  

  return (
    <>
    {cards.map((card , i )=> <Card data = {card} id = {i} />)}
    </>
  )

  
}

export default Cards