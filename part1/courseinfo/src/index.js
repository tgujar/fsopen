import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
} 

const Content = (props) => {
  return props.parts.map((part, idx) => {
    return <p>{part.name} {part.exercises}</p>;
  }) 
}

const Total = (props) => {
  return <p>
  Number of exercises {props.exercises.reduce((tot, num) => {
    return Number(num) + tot;
  }, 0)}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.map(part => part.exercises)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))