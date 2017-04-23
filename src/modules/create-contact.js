import "whatwg-fetch";

function createContact(contact) {
  const promise = fetch("/contacts", {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });
  const anotherPromies = promise.then((data) => {
  });
  return anotherPromies;
}

export default createContact;
