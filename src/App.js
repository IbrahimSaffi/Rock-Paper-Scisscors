import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

function App() {
  let navigate = useNavigate()
  let [currMove,setMove] = useState(null)
  let [loading,setLoading] =useState(null)
  //Storing PC Move and User Move in arrays so state change happens even if same pc/user move is played
  let [pcMove,setPCMove] = useState([])
  let [userMove,setUserMove] = useState([])
  let [pcScore,setPcScore] = useState(0)
  let [userScore,setUserScore] = useState(0)
  let [status,setStatus] = useState(null)
   useEffect(()=>{
    if(currMove!==null){
      setTimeout(()=>{
        setLoading(false)
        let tempArr = []
        tempArr.push(Math.floor(Math.random()*3))
        setPCMove(tempArr)
      },2000)
      setLoading(true)
    }
   },[userMove])
   useEffect(()=>{
    // using indices because three moves are in fix order i.e rock,paper,scissors
    if(pcMove.length>0){
      if(userMove[0]===pcMove[0]){
        setStatus("Draw")
      }
      if((userMove[0]===0&&pcMove[0]===2)
      ||(userMove[0]===1&&pcMove[0]===0)
      ||(userMove[0]===2&&pcMove[0]===1)
      ){
        let temp = userScore
        if(temp+1===3){
          setStatus("You Won!")
        }
        else{
          setStatus("You Score!")

        }
        setUserScore(temp+1)
      }
      if((pcMove[0]===0&&userMove[0]===2)
      ||(pcMove[0]===1&&userMove[0]===0)
      ||(pcMove[0]===2&&userMove[0]===1)
      ){
        
        let temp = pcScore
        if(temp+1===3){
          setStatus("Computer Won!")
        }
        else{
          setStatus("PC Score!")

        }
        setPcScore(temp+1)
      }
      if(userScore===3){
        setStatus("You Won!")
      }
    }
   },[pcMove])
   function reset(){
    setMove(null)
    setLoading(null)
    setPCMove([])
    setUserMove([])
    setPcScore(0)
    setUserScore(0)
    setStatus(null)
   }
  let imgArr = ["../../images/rock.png","../../images/paper.png","../../images/scissors.png"]
  function handleClick(){
    navigate("/started")
  }
  function moveClick(i){
    let tempUserMove = []
    tempUserMove.push(i)
    setUserMove(tempUserMove)
    setMove(imgArr[i])
    setStatus(null)
  }
  return (
    <div className="app">
      <img className='bg' src="../../images/bg.jpg" alt="" />
      <div className="card">
        <Routes>
        <Route path='/' element ={<StartScreen currMove ={currMove} handleClick= {handleClick} />} />
        <Route path='/started' element ={ <GameScreen currMove={currMove} moveClick={moveClick} userScore ={userScore} pcScore={pcScore} status={status} loading={loading} imgs={imgArr} pcMove={pcMove[0]} reset={reset} />} />
        <Route/>
        </Routes> 

      </div>
    </div>
  );
}

export default App;
