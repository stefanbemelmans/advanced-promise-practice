function createContact(contact) {
  return fetch("/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });
}

export default createContact;
