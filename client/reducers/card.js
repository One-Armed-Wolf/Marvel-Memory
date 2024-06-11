
const initialState = [{isHidden: true , id: 0} , {isHidden: true , id: 1}]

import { FLIP, ALL_FLIP, ALL_UN_FLIP, UN_FLIP} from '../Actions'

function card (state = initialState , action ) {
  switch (action.type) {
    case 'FLIP' : 
      const flip = [...state]
      flip.forEach( element => {
        if (element.id === action .id )
        {element.isHidden = false}
      })
      return flip
    case ALL_FLIP :
      const see = [...state]
      see.forEach (element => {
        element.isHidden = false
      })
      return see
    case ALL_UN_FLIP:
      const unsee = [...state]
      unsee.forEach (element => {
        element.isHidden = true
      })
      return unsee
      case UN_FLIP:
        const unflip = [...state]
        unflip.forEach( element => {
          if (element.id === action .id )
          {element.isHidden = false}
        })
      return unflip
    default:
      return state
  }
}

export default card 