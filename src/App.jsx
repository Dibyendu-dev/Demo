// import {getDatabase ,ref, set} from "firebase/database"
import { app } from "./firebase/firebase"
import {getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import './App.css'
import Signup from "./components/Signup"
import Login from "./components/Login"
import { useEffect, useState } from "react"

// const db = getDatabase(app)
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState(null)
//  const putData = ()=>{
//   set(ref(db,"users/biki"), {
//     id: 1,
//     name: "biki",
//     age:27,
//   });}

  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth,'ddas4548@gmail.com','biki123').then(
  //    (value)=> console.log(value)
  //   );
  // };

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }
      else{
        console.log("You are logged out")
        setUser(null)
      }
    })
  },[])

  if (user === null){
    return(
      <div>
        <Signup/>
      <Login/>
      </div>
    )
  }

 

  return (
    <>
     <h1>hello {user.email}</h1>
     <button onClick={()=> signOut(auth)}>logout</button>
    </>
  )
}

export default App
