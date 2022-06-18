import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) 
    return (<div> No feedback given</div>)
  
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="Total" value={total}/>
        <StatisticLine text="Average" value={(good + (bad * -1)) / total}/>
        <StatisticLine text="Positive" value={(good/total) * 100}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'Positive' || text === 'Average')
    value = Math.round(value * 10) / 10
  if (text === 'Positive')
    return (<tr><td>{text}</td><td>{value} %</td></tr>)
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button onClick={increaseGoodByOne} text="Good"/>
      <Button onClick={increaseNeutralByOne} text="Neutral"/>
      <Button onClick={increaseBadByOne} text="Bad"/>
      <Header text="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App