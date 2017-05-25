import request from 'request-promise-native';

// Setloader takes a set abbrviation code and
// returns a promise(!) for an object of the cards in that set by multiverseid
export function setLoader(set){
  return new Promise((resolve, reject) => {
    const options = {
      uri: `https://mtgjson.com/json/${set}.json`,
      json: true
    }

    request(options)
      .then((setInfo) => {
        // The set stores the cards as an array, so we convert that to an obj
        const cards = setInfo.cards;
        // If we want to "brand" each card with a set we would do it in this reduce.
        // Here we are creating an object of cards with their multiverseid as their key
        const cardsObj = cards.reduce((acc, cur, i) => {
          const id = cur.multiverseid;
          acc[id] = cur;
          return acc;
        }, {});
        resolve(cardsObj);
      })
      .catch((err) => {
        reject(err)
      });
  });
}
