import "./App.css";
import User from "./components/UI/game/User";
import Board from "./components/UI/game/Board";
import {useEffect, useReducer, useState} from "react";
const initialValue = {
    user1: {inp: "", select: "X"},
    user2: {inp: "", select: "O"}
}
const reducer = (state, action) => {
    switch (action.type){
        case "user1_inp":
            return ({
                ...state,
                user1: {inp : action.value, select: state.user1.select}
                })
        case "user2_inp":
            return ({
                ...state,
                user2: {inp : action.value, select: state.user2.select}
            })
        case "user1_select":
            return ({
                ...state,
                user1: {inp : state.user1.inp, select: action.value}
            })
        case "user2_select":
            return ({
                ...state,
                user2: {inp : state.user2.inp, select: action.value}
            })
        default:
            return state
    }
}
function isWin(arr){
    const winState = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i of winState){
        if(arr[i[0]] === arr[i[1]] && arr[i[1]] === arr[i[2]] && arr[i[0]]) return true
    }
    return false
}
let time = 0;
let myInterval;
function App() {
  const [values, dispatch] = useReducer(reducer, initialValue)
  const [isStart, setIsStart] = useState(false)
  const [matrix, setMatrix] = useState([])
  const [winner, setWinner] = useState("")
  const [turn, setTurn] = useState({})
  useEffect(()=> {
      if(isStart) {
          myInterval = setInterval(()=> time++,1000)
      }else {
          if(myInterval)
          clearInterval(myInterval)
      }
  },[isStart])
  if (isStart){
      if(!winner){
      return (
          <div>
              <div>Turn : {turn.inp}({turn.select})</div>
              <Board onClickBtn={(e) => {
                  if(!e.currentTarget.textContent){
                      e.currentTarget.textContent = turn.select
                      const index = Number(e.target.id)
                      matrix[index] = turn.select
                      setMatrix([...matrix])
                      if(isWin(matrix)) {setWinner(turn.inp)}
                      if (turn === values.user1) {setTurn(values.user2)}
                      else {setTurn(values.user1)}}
              }}/>
          </div>
      )
  }else {
          return (
              <div>
                  winner is {winner} in {time} second.
              </div>
          )
      }
  }else {
    return (
    <>
      <div className={"container"}>
        <User id="1"
              onSelectChange={(value)=> dispatch({type:"user1_select", value: value})}
              onInpChange={(value) => dispatch({type:"user1_inp", value: value})}
              selectVal={values.user1.select}
              inpVal={values.user1.inp}/>
          <User id="2"
                onSelectChange={(value)=> dispatch({type:"user2_select", value: value})}
                onInpChange={(value) => dispatch({type:"user2_inp", value: value})}
                selectVal={values.user2.select}
                inpVal={values.user2.inp}/>
      </div>
        <button onClick={()=>{
            if(values.user1.inp !== values.user2.inp && values.user1.select !== values.user2.select) setIsStart(true)
            setTurn(values.user1)
        }}>Start</button>
    </>
  );
  }
}

export default App;
