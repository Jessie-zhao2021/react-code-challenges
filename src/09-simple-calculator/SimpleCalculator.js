import { useReducer } from "react"

const initialState = {
  num1 : 0,
  num2 : 0,
  result : 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'setNumber1':
      return { ...state, num1:action.number}
    case 'setNumber2':
      return { ...state, num2:action.number}
    case 'PLUS':
      return { ...state, result: state.num1 + state.num2}
    case 'MINUS':
      return { ...state, result: state.num1 - state.num2}
      case 'MULTIPLICATION':
        return { ...state, result: state.num1 * state.num2}
      case 'DIVISION':
        return { ...state, result: state.num1 / state.num2}
    case 'C':
      return initialState
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer, initialState)
console.log(state)


  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'setNumber1', number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'setNumber2', number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick = {() => dispatch({type: 'PLUS'})}>+</button>
        <button onClick = {() => dispatch({type: 'MINUS'})}>-</button>
        <button onClick = {() => dispatch({type: 'MULTIPLICATION'})}>x</button>
        <button onClick = {() => dispatch({type: 'DIVISION'})}>/</button>
        <button onClick = {() => dispatch({type: 'C'})}>c</button>
      </div>
      <div><h2>Result:{state.result}</h2></div>
    </div>
  )
}
