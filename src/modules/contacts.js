import getOneContact from "./get-one-contact";
import createContact from "./create-contact";

function theWebRequstIsDone(response) {
  console.log("Contact response",response);
  return response.json();

}
function jsonIsReady(data) {
  console.log("Contact data",data);
  document.getElementById("numberOfContacts").innerHTML = data.length;

}

function loadAllContacts() {
  // 1) I want to fetch all contacts from a server
  // where is this information located?
  const webRequestPromise = fetch("/contacts");
  // 2) my code is going to continue to run while the web request is still going
  // 3) I need to tell the promise what function to run when the web request is done
  const getJsonPromise = webRequestPromise.then(theWebRequstIsDone);
  // 4) I need to tell the promise what function to run when the json is ready
  getJsonPromise.then(jsonIsReady);


}
loadAllContacts();

// 3) We can use promises from other modules
getOneContact(1).then(function (data) {
  document.getElementById("contactName").innerHTML = data.name;
});


window.createContact = function () {
  createContact({
    name: "Dale Cooper",
    occupation: "FBI Agent"
  }).then(function () {
    loadAllContacts();
  });    
};

