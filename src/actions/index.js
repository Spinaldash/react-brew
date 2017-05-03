let nextCardId = 0
export const addCard = (cardName) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    cardName
  }
}
