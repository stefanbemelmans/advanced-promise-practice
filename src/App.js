import React from "react";
import "whatwg-fetch";
import getAllContacts from "./modules/get-all-contacts";
import getOneContact from "./modules/get-one-contact";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      contact: {}
    };
  }
  componentDidMount() {
    // 1) make web request
    // 2) convert response to object
    // I have no idea when the web request will be done so I need a promise
    const webRequestPromise = fetch("/contacts");
    const convertToJsonPromise = webRequestPromise.then((response) => {
      // what is in the response variable?
      // when this line of code executes it means the web call is done
      // i have to decide how i want to transform the data
      // that is returned, plain text or a Js Object?
      return response.json();
    });
    // I have no idea when converting to json will be done
    // so I need another promise
    convertToJsonPromise.then((data) => { 
      this.setState({
        contacts: data
      });
    });

    const anotherConvertToJsonPromise= getOneContact(1);
  }
  render() {
    return (
      <div className="App">
        <h1>This better say 5: {this.state.contacts.length} </h1>
        <h1>This better say Dale Cooper: {this.state.contact.name} </h1>
      </div>
    );
  }
}
export default App;
