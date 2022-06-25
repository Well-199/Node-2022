import { useReducer } from 'react'

type reducerState = {
  count: number,
}
type reducerAction = {
  type: string,
}

const initialState = { count: 0 }
const reducer = (state: reducerState, action: reducerAction) => {

}

const App = () => {

  // reducer armazena uma função e initialState armazena um objeto
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      
    </div>
  )
}

export default App
