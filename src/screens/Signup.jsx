import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:"",})
    let navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,geolocation:credentials.geolocation}))
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation            })
        })
        const json = await response.json()
        console.log(json);
        if(json.success){
            navigate("/login")
        }else{
          alert("Enter valid Credentials")
        }
    }
    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
<div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
<Navbar/>
<div className='container' style={{paddingTop: '100px'}}> 
<form onSubmit={handleSubmit} style={{background:'#333333',color:'white',border:'1px solid #333333',borderRadius:'4px'}} className='w-50 m-auto mt-25'>
 <div className="m-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" style={{background:'grey',border:'1px solid grey',color:'black'}} className="form-control" name="name" value={credentials.name} onChange={onChange} />
    
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" style={{background:'grey',border:'1px solid grey',color:'black'}} className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" style={{background:'grey',border:'1px solid grey',color:'black'}} className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="m-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" style={{background:'grey',border:'1px solid grey',color:'black'}} className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className=" m-3 btn" style={{background:'#4CBB17',color:'white'}}>Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
  
</form>
</div>
</div>
</>
  );
}
