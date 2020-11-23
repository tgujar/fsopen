import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistic = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let posPercent = (good * 100) / all;
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <Statistic text="good" value={good} />
        </tr>
        <tr>
          <Statistic text="neutral" value={neutral} />
        </tr>
        <tr>
          <Statistic text="bad" value={bad} />
        </tr>
        <tr>
          <Statistic text="all" value={all} />
        </tr>
        <tr>
          <Statistic text="average" value={average} />
        </tr>
        <tr>
          <Statistic text="positive" value={posPercent + '%'} />
        </tr>
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function increment(f, val) {
    return () => f(val + 1);
  }

  return (
    <div className="app">
      <h2>give feedback</h2>
      <Button handleClick={increment(setGood, good)} name="good" />
      <Button handleClick={increment(setNeutral, neutral)} name="neutral" />
      <Button handleClick={increment(setBad, bad)} name="bad" />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
