import React,{ useState} from 'react'
import axios from 'axios'

function Register() {
  const style={
    regist:{
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
    password:"",
    confirmPassword:""
})
 const [heading,setHeading]=useState({text:"Enter your credentials below",color:"red"})
const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit=async ()=>{
  if(data.username==="" || data.password=="" || data.confirmPassword==="")
    {
        alert("enter all details");
    }

    else{
    
    try{
    const data1=await axios.post("http://localhost:5000/register",data)
    setHeading({...heading,text:data1.data.message,color:"green"})
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

  
    <div style={style.regist}>
    <h1 style={{color: heading.color}}>{heading.text}</h1>
      <div>
            <label htmlFor="username" >Enter Username</label>
            <input name='username' id="username" onChange={handleChange} placeholder='Enter Username'/>
            </div>
            <div>
            <label htmlFor="password" >Enter Password</label>
            <input name='password' id="password" onChange={handleChange} placeholder='Enter password'/>
            </div>
            <div>
            <label htmlFor="confirmPassword" >re-enter Password</label>
            <input name='confirmPassword' id="confirmPassword" placeholder='re-enter Password' onChange={handleChange} />
        </div>
            <div>
            <button type='submit' onClick={(handleSubmit)}>Submit</button>
            </div>
        

    </div>
</div>
)
}

export default Register