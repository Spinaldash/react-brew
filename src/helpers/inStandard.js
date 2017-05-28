import request from 'request-promise-native';
// http://whatsinstandard.com/api/4/sets.json

// This function will return an array of codes for of what sets are in standard
export function whatsInStandard() {
  return new Promise((resolve, reject) => {
    const options = {
      uri: 'http://whatsinstandard.com/api/4/sets.json',
      json: true
    }

    request(options)
    // setsInfo is an Array of Objects, example obj:

    // block:"Battle for Zendikar"
    // code:"BFZ"
    // enter_date:"2015-10-02T00:00:00.000Z"
    // exit_date:"2017-09-29T00:00:00.000Z"
    // name:"Battle for Zendikar"
    // rough_exit_date:"Q4 2017"

    .then((setsInfo) => {
      const setsInStandard = setsInfo.map((curr, index, oriArray) => {
        return curr.code
      })
      resolve(setsInStandard);
    })
    .catch((err) => {
      reject("inStandard.js: " + err)
    });
  })
}
