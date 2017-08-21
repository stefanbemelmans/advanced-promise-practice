import getOneComment from "./get-one-comment";
import createComment from "./create-comment";

function theWebRequestIsDone(response) {
  console.log("Contact response",response);
  return response.json();

}

function jsonIsReady(data) {
  console.log("Comment data", data);
  document.getElementById("numberOfComments").innerHTML = data.length;

}

function loadAllComments() {
  // 1) Long way
  const webRequestPromise = fetch("/comments");
  const getJsonPromise = webRequestPromise.then(theWebRequestIsDone);
  getJsonPromise.then(jsonIsReady);
  // 2) Short way

}
loadAllComments();

// 3) We can use promises from other modules



window.makeComment = function () {
 
};

