import React,{useState}from 'react'
import { app } from "../firebase/firebase"
import {getAuth , signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(app)

const Login = () => {

    const loginUser = () => {
       signInWithEmailAndPassword(auth,email,password)
       .then((value => alert('succes')))
       .catch((err=> alert(err)))
    }

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
  return (
    <div className='ligin'>
    <h1>Login</h1>
    <label >Email</label>
    <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='enter your email' /><br />
    <label >Password</label>
    <input  onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='enter your password' /> <br />
    <button onClick={loginUser}>Login</button>

</div>
  )
}

export default Login