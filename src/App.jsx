// https://youtu.be/-uAhf92DVqA

import { useState, useEffect } from 'react'
import { ImCross } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
import './App.css'

function App() {
  const [left, setLeft] = useState(9)
  const [turn, setTurn] = useState(true)
  const [icon1, setIcon1] = useState()
  const [icon2, setIcon2] = useState()
  const [icon3, setIcon3] = useState()
  const [icon4, setIcon4] = useState()
  const [icon5, setIcon5] = useState()
  const [icon6, setIcon6] = useState()
  const [icon7, setIcon7] = useState()
  const [icon8, setIcon8] = useState()
  const [icon9, setIcon9] = useState()
  const [icon1tog, setIcon1tog] = useState(false)
  const [icon2tog, setIcon2tog] = useState(false)
  const [icon3tog, setIcon3tog] = useState(false)
  const [icon4tog, setIcon4tog] = useState(false)
  const [icon5tog, setIcon5tog] = useState(false)
  const [icon6tog, setIcon6tog] = useState(false)
  const [icon7tog, setIcon7tog] = useState(false)
  const [icon8tog, setIcon8tog] = useState(false)
  const [icon9tog, setIcon9tog] = useState(false)
  const [board, setBoard] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]])


  const check = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0]
      }
    }

    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i]
      }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0]
    }

    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2]
    }
  }

  const finish = (win) => {
    console.log(`${win} won!!`)
    if (win === 1) {
      document.querySelector(".screen").innerHTML = `Circle won!!!!`
    }
    else {
      document.querySelector(".screen").innerHTML = `Cross won!!!!`
    }

    setIcon1tog(true)
    setIcon2tog(true)
    setIcon3tog(true)
    setIcon4tog(true)
    setIcon5tog(true)
    setIcon6tog(true)
    setIcon7tog(true)
    setIcon8tog(true)
    setIcon9tog(true)
  }

  useEffect(() => {
    if (turn) {
      document.querySelector(".screen").innerHTML = `<span>Turn for:</span> <svg stroke="currentColor" fill="red" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>`
    }

    else {
      document.querySelector(".screen").innerHTML = `<span>Turn for:</span> <svg stroke="currentColor" fill="blue" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>`
    }

  }, [turn])

  useEffect(() => {
    let ans = 0
    ans = check()

    if (left === 0) {
      document.querySelector(".screen").innerHTML = `Tie`
    }

    if (ans === 1 || ans === -1) {
      finish(ans)
    }

  }, [left])

  const changeTurn1 = (e) => {
    setIcon1tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon1(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[0][0] = -1
      setBoard(newBoard)
    }
    else {
      setIcon1(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[0][0] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn2 = (e) => {
    setIcon2tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon2(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[0][1] = -1
      setBoard(newBoard)
    }
    else {
      setIcon2(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[0][1] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn3 = (e) => {
    setIcon3tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon3(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[0][2] = -1
      setBoard(newBoard)
    }
    else {
      setIcon3(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[0][2] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn4 = (e) => {
    setIcon4tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon4(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[1][0] = -1
      setBoard(newBoard)
    }
    else {
      setIcon4(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[1][0] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn5 = (e) => {
    setIcon5tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon5(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[1][1] = -1
      setBoard(newBoard)
    }
    else {
      setIcon5(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[1][1] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn6 = (e) => {
    setIcon6tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon6(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[1][2] = -1
      setBoard(newBoard)
    }
    else {
      setIcon6(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[1][2] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn7 = (e) => {
    setIcon7tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon7(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[2][0] = -1
      setBoard(newBoard)
    }
    else {
      setIcon7(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[2][0] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn8 = (e) => {
    setIcon8tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon8(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[2][1] = -1
      setBoard(newBoard)
    }
    else {
      setIcon8(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[2][1] = 1
      setBoard(newBoard)
    }
  }
  const changeTurn9 = (e) => {
    setIcon9tog(true)
    setTurn(!turn)
    setLeft(left => left - 1)
    console.log(turn)
    if (turn) {
      setIcon9(<ImCross size={40} />)
      const newBoard = [...board]
      newBoard[2][2] = -1
      setBoard(newBoard)
    }
    else {
      setIcon9(<FaCircle size={40} />)
      const newBoard = [...board]
      newBoard[2][2] = 1
      setBoard(newBoard)
    }
  }

  return (
    <>
      <div className="area">
        <div className="field"> {/* Instead of hardcoding every button, use map function */}
          <button disabled={icon1tog} onClick={changeTurn1} name='0' className="sqr">{icon1}</button>
          <button disabled={icon2tog} onClick={changeTurn2} name='1' className="sqr">{icon2}</button>
          <button disabled={icon3tog} onClick={changeTurn3} name='2' className="sqr">{icon3}</button>
          <button disabled={icon4tog} onClick={changeTurn4} name='3' className="sqr">{icon4}</button>
          <button disabled={icon5tog} onClick={changeTurn5} name='4' className="sqr">{icon5}</button>
          <button disabled={icon6tog} onClick={changeTurn6} name='5' className="sqr">{icon6}</button>
          <button disabled={icon7tog} onClick={changeTurn7} name='6' className="sqr">{icon7}</button>
          <button disabled={icon8tog} onClick={changeTurn8} name='7' className="sqr">{icon8}</button>
          <button disabled={icon9tog} onClick={changeTurn9} name='8' className="sqr">{icon9}</button>
        </div>

        <div className="screen">
          <ImCross size={40} />
          <FaCircle size={40} />
        </div>

        <button className='restart' onClick={() => { window.location.reload() }}>Restart</button>
      </div>
    </>
  )
}

export default App
