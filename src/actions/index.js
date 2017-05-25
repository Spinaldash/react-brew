let nextCardId = 0
export const addCard = (cardName) => {
  // TODO: Fix this action to only have a type & payload (FSA compliant)
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    cardName
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
