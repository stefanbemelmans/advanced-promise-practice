import "whatwg-fetch";
// 1) make web request
// 2) convert response to object
function getAllContacts() {
  // I have no idea when the web request will be done so I need a promise
  const webRequestPromise = fetch("/contacts");
  const convertToJsonPromise = webRequestPromise.then(function (response) {
    // what is in the response variable?
    // when this line of code executes it means the web call is done
    // i have to decide how i want to transform the data
    // that is returned, plain text or a Js Object?
    return response.json();
  });
  // I have no idea when the conversion to json will be done
  // So I need another promise
  return convertToJsonPromise;
}

export default getAllContacts;
