import React from 'react'
import {useState } from 'react'
function Start() {
    const [count1,setCount1]=useState(10)
    const [count,setCount]=useState(10)
    const [cards,setCards]=useState([])
    const [ind,setInd]=useState([])
    const [second,setSecond]=useState(-1)
    const [first,setFirst]=useState(-1)
    let idx=0;
    let arr=[];
    const style={

        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)"
    }
    const pstyle={
        fontSize:"10px"
    }
    function sleep(ms) {
        const start = Date.now();
        while (Date.now() - start < ms);
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    function run() {
        console.log("Before delay");
        delay(2000); // Pause for 2 seconds
        console.log("After 2 seconds");
    }
    
    
    function handleClick(id){
        idx=ind[id]
        console.log(id,idx)
        setCards([...cards,cards[idx].selected=true])
        if (first===-1)
        {
            setFirst(idx)
            setSecond(-1)
        }
        else
        {
            setSecond(idx)
            // setSecond(cards[idx].id)
            console.log("second idx",second)
            // setTimeout(()=>{},2000)
            run();
            if (cards[first].number===cards[idx].number)
                {
                    setCards([...cards,cards[first].deleted=true])
                    setCards([...cards,cards[idx].deleted=true])
                    console.log(cards[first],cards[idx],50)
                    
                }
                else
                {
                    setCards([...cards,cards[idx].selected=false])
                    setCards([...cards,cards[first].selected=false])
                }
                run();
                setFirst(-1)
                console.log(second)
                // setSecond(-1)
        }
        console.log("end")
    }
    function handleCount(e){
        console.log(count1,e)
        setCount(count1)
    }
    function handleCount1(e){
        setCount1(e.target.value)
        console.log(count1)
        
    }
    function handleCards(){
            let newCards = []; 
            for (let i = 0; i <2*count; i++) {
                arr.push(0);
            }
            for (let i = 0; i <count; i++) {
                
                newCards.push({ number: i, selected: false, deleted: false, id: i });
            }
            for (let i = 0; i <count; i++) {
                 newCards.push({ number: i, selected: false, deleted: false, id: count + i });
             }
             for (let i = newCards.length - 1; i > 0; i--) {

                const j = Math.floor(Math.random()*6);
                [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
                arr[newCards[i].id]=i
                arr[newCards[j].id]=j
            }
            console.log(arr)
            setInd(arr)
            setCards(prevCards => [...prevCards, ...newCards]);        }
    
  return (
    
    <div>
    <div style={{display:"flex"}}>
   <h1 style={{marginRight:"500px"}}>This is first card{first===-1?<div>?</div>:<div>
            <p style={{fontSize:"25px"}}>{cards[first].number}</p>
            </div>}</h1>
   <h1 >This is second card{second===-1?<div>?</div>:<div>
            <p style={{fontSize:"25px"}}>{cards[second].number}</p>
            </div>}</h1>
    </div>
        {count==-1?
    <div>
        <input name="count1" placeholder='Enter no of cards' onChange={(e)=>setCount1(e.target.value)}/>
        <button onClick={handleCount}>Submit</button>
    </div>   

    :<div style={style} >
    {cards.map(card=>(
        <div key={card.id} style={{border:"10px" ,borderColor:"black" , backgroundColor:card.selected==true?card.deleted?"grey":"green":"#eccbde",margin:"10px"}}>
            
            {card.deleted===true?<div key={card.id+100}>
                <p style={pstyle}> deletedd</p>
            </div>
            :<div key={card.id+100}>{
                    card.selected===false? <div>
                        {/* <p>{arr[card.id]}</p> */}
                        <p style={{fontSize:"50px"}}>{card.number}</p>
                        <button  onClick={()=>handleClick(card.id)}>Click</button>
                        </div>
                        :<div style={{backgroundColor:"LightGray",fontSize:"100px"}}>
                           <p style={pstyle}>card.number:{card.number}</p>
                           <p style={pstyle}>card.id:{card.id}</p>
                        </div>
                }</div>
            }
            </div>
    ))}
    </div>  
}
        <button onClick={handleCards} >generate cards</button>
        {/* <p>{first}</p> */}
    </div>
  )
}

export default Start;