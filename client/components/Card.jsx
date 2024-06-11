import React from 'react'

import { useSelector, useDispatch} from 'react-redux'
import {flipCard} from '../Actions'

function Card (props) {
  const dispatch = useDispatch()

  const isHidden = props.data.isHidden
  const id = props.id


  
  return (
    <img src={isHidden ? '/images/back.jpeg' : '/images/front.jpeg'} onClick= {() => dispatch(flipCard(id))}></img>
  )
  
}

export default Card