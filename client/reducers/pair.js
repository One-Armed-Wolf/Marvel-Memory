const initialState = []

function pair (state = initialState , action) {
  switch(action.type) {
    case 'ADD' :
      return [...state, action.card]
    default : return state
  } 
}