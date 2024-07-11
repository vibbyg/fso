import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const AnecdoteDisplay = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has votes {votes}</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const zeroFilledArr = Array(anecdotes.length).fill(0)
  const handleSelect = () => {
    console.log(Math.floor(Math.random() * anecdotes.length))
    setSelected(Math.floor(Math.random() * anecdotes.length))

  }

  const handleVote = () => {
    const currentVotes = [...votes];
    currentVotes[selected] += 1;
    if(currentVotes[selected] > currentVotes[max]) {
      setMax(selected);
    }
    setVotes(currentVotes);
  }
   
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(0)
  const [votes, setVotes] = useState(zeroFilledArr)

  return (
    <div>
      <AnecdoteDisplay title={"Anecdote of the day"} anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleSelect} text={"new anecdote"} />
      <Button handleClick={handleVote} text={"vote"} />
      <AnecdoteDisplay title={"Anecdote with the most votes"} anecdote={anecdotes[max]} votes={votes[max]} />
    </div>
  )
}

export default App