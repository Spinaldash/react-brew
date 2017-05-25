let nextCardId = 0
export const addCard = (miniCard) => {
  // To add a card to the deck you provide a miniCard -
  console.log('addCard happening, miniCard: ', miniCard);
  return {
    type: 'ADD_DECK_CARD',
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
