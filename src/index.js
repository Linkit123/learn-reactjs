import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import logo from "./logo.svg";
import "./App.css";

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Person {
  constructor(name, email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
  }
  getInfo() {
    return `${this.name}, with email: ${this.email} and salary ${this.salary}$`;
  }
}
const person = new Person("linhtn", "trinhngoclinh0308@gmail.com", 10000.0);
console.log(person);
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount!");
    this.timerID111 = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const text = `\${} Hello, 
    fuckkyyy ${person.getInfo()}!`;
    console.log(text);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>{text}</h1>
            <FormattedDate date={this.state.date} />
          </div>
        </header>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Clock />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
