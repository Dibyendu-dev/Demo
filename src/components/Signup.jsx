import React, { useState } from 'react'
import { app } from "../firebase/firebase"
import {getAuth , createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const Signup = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const createUser =()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value => alert('succes')))
    }

    const signUpWithGoogle =()=>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }

  return (
    <div className='signup'>
        <h1>Signup</h1>
        <label >Email</label>
        <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='enter your email' /><br />
        <label >Password</label>
        <input  onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='enter your password' /> <br />
        <button onClick={createUser}>Signup</button> <br />
        <button onClick={signUpWithGoogle}>Signup with Google</button> <br />


    </div>
  )
}

export default Signup