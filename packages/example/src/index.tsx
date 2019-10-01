import { render, createElement, Component } from "@own-react/react";

class App extends Component {
  render() {
    return createElement("div", null, "Hello, ", this.props.name, "!");
  }
}

const element = createElement(App, { name: "Evgeny" });

render(element, document.getElementById("root"));
