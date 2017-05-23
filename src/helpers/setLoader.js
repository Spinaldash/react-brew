import request from 'request';

// Setloader takes a set abbrviation code and
// returns an object of the cards in that set
export function setLoader(set){
  // string interpolation 😎
  request(`https://mtgjson.com/json/${set}.json`, (error, response, body) =>{
    const setObj = JSON.parse(body);
    // The set stores the cards as an array, so we convert that to an obj
    const cards = setObj.cards;
    // If we want to "brand" each card with a set we would do it in this reduce.
    // Here we are creating an object of cards with their multiverseid as their key
    const cardsObj = cards.reduce((acc, cur, i) => {
      const id = cur.multiverseid;
      acc[id] = cur;
      return acc;
    }, {});

    return cardsObj;
  });
}
