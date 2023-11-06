import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:"",})
  let navigate = useNavigate()
  const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
      const response = await fetch("http://localhost:5000/api/login",{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
            email:credentials.email,password:credentials.password})
      })
      const json = await response.json()
      console.log(json);
      if(!json.success){
          alert("Enter valid Credentials")
      }
      if(json.success){
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
    }
  }
  const onChange = (event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <Navbar/>
      <div className='container' style={{paddingTop:'130px'}}>
<form className='w-50 m-auto mt-5 ' onSubmit={handleSubmit} style={{background:'#333333',color:'white',border:'1px solid #333333',borderRadius:'4px'}}>
 
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} style={{background:'grey',border:'1px solid grey',color:'black'}} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} style={{background:'grey',border:'1px solid grey',color:'black'}} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className=" m-3 btn" style={{background:'#4CBB17'}}>Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
</form>
</div>
</div>
    </>
  )
}

