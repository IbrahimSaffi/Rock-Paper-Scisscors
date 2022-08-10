import React from 'react'

export default function GameScreen(props) {
    console.log(props.currMove)
  return (
    <div className='game-container' >
        <div className='players-container'>
         <div className='you' >
          <h2>You</h2>
          <h2 className='score' >{props.userScore}</h2>
           {props.currMove===null?"":
           <img src={props.currMove} alt="" />}
         </div>
         <div className='vs' >
         <h1  style={{color:"red"}}>VS</h1>
          <p className='game-guide' >First To Three Wins!</p>
         {props.status!==null&&!props.status.includes("Won")?<h2 className='status' >{props.status}</h2>:""}
         </div>
         <div className='pc' >
          <h2>PC</h2>
          <h2 className='score' >{props.pcScore}</h2>
           {props.loading? <h3 style={{height:"100px",paddingTop:"30px" }} >Loading...</h3>:( props.loading!==null?<img src={props.imgs[props.pcMove]} alt="" />:"")}
         </div>
         
        </div>
        {props.status!==null&&props.status.includes("Won")?<div>
        <h2 className='status' >{props.status}</h2>
        {/* Start here add on Click to reset game && fix bug */}
        <button onClick={()=>props.reset()} className='again'>Play again</button>                  
        </div>:
         <div className='moves-container' >
          {!props.loading&&props.imgs.map((ele,i)=>{
            return <div key={i}>
                 <img onClick={()=>props.moveClick(i)}  src={ele} alt="" />
                 <h2>{i===0?"Rock":i===1?"Paper":"Scissors"}</h2>
             </div>  
           })}
         </div>
}
    </div>
  )
}
