export function addDeckCard(state = {}, action) {
  //find id, check to see if its in there if so increment, if not add it
  const multi = action.payload.multiverseid
  let newState = { ...state }
  if (state[multi]) {
    // The Card is already in the deck, increment the count
    newState[multi].count = newState[multi].count + 1 || 1
  } else {
    // The Card is new, add it to the deck.
    newState[multi] = { ...action.payload }
    newState[multi].count = 1
  }
  return {
    ...newState
  }
}

export function subtractDeckCard(state = {}, action) {
  const multi = action.payload.multiverseid
  let newState = { ...state }
  if (state[multi]) {
    newState[multi].count = newState[multi].count - 1 || 0
    if (newState[multi].count <= 0) {
      delete newState[multi]
    }
  } else {
    console.error("Tried to delete a card not in deck, multiverseid: ", multi)
  }
  return {
    ...newState
  }

}
