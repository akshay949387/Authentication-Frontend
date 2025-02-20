import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const style={
    navbar:{
      display:"flex",
      justifyContent:"start",
      alignItems:"",
      padding:"10px",
      backgroundColor:"yellow"

    },
    navbarHeading:{
      marginRight:"1090px"
    },
    navigate:{
      display:"flex",
    },
    auth:{
      marginRight:"100px",
      textDecoration: "none"
    }

}
  return (
    <div className='navbar' style={style.navbar}>
      <div className='navbarHeading' style={style.navbarHeading}><h1>Navbar</h1></div>
    <div className='navigate' style={style.navigate}>    
      <h2><Link to='/login' className="auth" style={style.auth}>Login</Link></h2>
      <h2><Link to='/register' className="auth" style={style.auth}>Register</Link></h2>
    </div>
    </div>
  );
};
export default Navbar;