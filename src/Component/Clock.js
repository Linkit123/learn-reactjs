import React from "react";
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Person {
  constructor(name = "anomyos", email, salary) {
    this.name = name;
    this.email = email;
    this.salary = salary;
  }
  getInfo() {
    return `${this.name}, with email: ${this.email} and salary ${this.salary}$`;
  }
}
const person = new Person(undefined, "trinhngoclinh0308@gmail.com", 10000.0);
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
      <div>
        <h1>{text}</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
