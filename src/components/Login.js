import React from 'react'
import {useState} from 'react'
import axios from 'axios'
function Login() {
    const style={
        login:{
              backgroundColor:"#cbddcd",
              width:"500px",
              height:"300px",
              margin:"200px",
              paddingLeft:"10px",
              borderRadius:"5%"
            }
    }
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const [heading,setHeading]=useState({text:"Enter your credentials below",color:"red"})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=async ()=>{
        if(data.username==="" || data.password=="")
        {
            alert("enter all details");
        }

        else{
        setHeading({...heading,text:"Form Submitted Successfully",color:"green"})
        try{
        const data1=await axios.post("http://localhost:5000/login",data)
        if(data1.payload)
        {
            {
                <div>
                    <h1>{data1.b.username}</h1>
                    <h1>{data1.b.password}</h1>
                </div>
            }
        }
         console.log("data1 recieved from login ",data1)
        }
        catch(err)
        {
            console.log("error in axios login",err)
        }
    }
       
    }

  return (
    <div>
        
        
        <div style={style.login}>
        <h1 style={{color: heading.color}}>{heading.text}</h1>
        <div>
            <div >
            <label htmlFor="username" >Enter Username</label>
            <input name='username' id="username" onChange={handleChange} placeholder='Enter Username'/>
            </div>
            <div>
            <label htmlFor="password" >Enter Password</label>
            <input name='password' id="password" onChange={handleChange} placeholder='Enter password'/>
            </div>
            <div>
            <button type='submit' onClick={(handleSubmit)}>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login