module.exports = function handleResponseFromAPI(promise) {
  promise
    .then((success) => {
      console.log('Got a response from the API');
      return { status: 200, body: success };
    })
    .catch((error) => { // eslint-disable-line no-unused-vars
      console.log('Got a response from the API');
      return Error();
    });
};
