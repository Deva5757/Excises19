import { useState } from 'react'
import spider_man from './aline-x.png'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function voic(){
// if(load in window){
//   var welcome=new SpeechSynthesisUtterance('Welcome to our website!');
//   window.speech.speak(welcome);
// }
// };
// window.addEventListener("load",voic());


const msg=()=>{
  let userName=document.querySelector("#user").value;
  let password=document.querySelector("#psw").value;
  let confrimPassword=document.querySelector("#cpsw").value;
  if(userName==false || password==false || confrimPassword==false){
    // toast('Please Enter Valid Input');
    alert('Please Enter Valid Input');
  }

  else if(password!==confrimPassword){
    // toast('Your Password Mismatch');
    alert('Your Password Mismatch');
  }
  
  else{
    // toast(`${userName} Account Created Successfully`);
    alert(`${userName} Account Created Successfully`);
  }
}


function App() {
  const [count, setCount] = useState(0)
 return (
    <>
    <div className="container">
      <img src={spider_man} alt="asas"  style={{width:"330px",height:'270px', borderRadius:'50%'}}/>
      <form action="">
        <h2>Hi Hello</h2>
        <div>
          <label>UserNmae</label>
          <input type="text" name="" id="user" placeholder='ex:BenTen@florida.com'/>
        </div>
        <div>
          <label className='lab'>Enter Your New Password</label>
          <input type="password" name="" id="psw" placeholder=''/>
        </div>
        <div>
          <label className='lab'>Confrim Password</label>
          <input type="password" name="" id="cpsw" placeholder=''/>
        </div>
        <button onClick={msg} className='btn'>Create a Account</button>
        <ToastContainer/>
      </form>
    </div>
    </>
  )
}
export default App
