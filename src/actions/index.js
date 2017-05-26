export const addCard = (miniCard) => {
  return {
    type: 'ADD_DECK_CARD',
    payload: miniCard
  }
}

export const subtractCard = (miniCard) => {
  return {
    type: 'SUBTRACT_DECK_CARD',
    payload: miniCard
  }
}

export const loadSamples = () => {
  return {
    type: 'LOAD_SAMPLES',
  }
}
export const addLibrarySource = (cards) => {
  return {
    type: 'ADD_LIBRARY_SOURCE',
    payload: cards
  }
}
