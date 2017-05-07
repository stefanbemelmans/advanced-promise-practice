function getOneContact(id) {
  const promise = fetch(`/contacts/${id}`);
  const anotherPromise = promise.then(function (response) {
    return response.json();
  });
  return anotherPromise;
}

export default getOneContact;
