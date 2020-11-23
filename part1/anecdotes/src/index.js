import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.text}</button>)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));

  const randAnecdote = () => setSelected(
    Math.floor(Math.random() * anecdotes.length)
  ); 

  const addVotes = () => {
    let newVotes = [...votes];
    newVotes[selected]++;
    setVote(newVotes);
  }

  return (
    <div>
      <h2>Ancdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={addVotes} text="vote" />
      <Button handleClick={randAnecdote}  text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)