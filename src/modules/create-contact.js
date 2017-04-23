import "whatwg-fetch";

function createContact(contact) {
  const promise = fetch("/contacts", {
    method: "post",
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
