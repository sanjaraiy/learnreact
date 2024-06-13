import  {useState} from 'react'
import Counter from './Counter'
import Avatar from './Avatar'
function App() {
    

//==================================== Task 1 ==========================================
//---------state variable------------------
// const [counter,setCounter]=useState(0)
   
//---------simple Variable-----------------
// let counter = 55;

//   const addValue=()=>{
//     if(counter<20){
//       setCounter((prev) => prev+1);
//     }
//  }

// const removeValue=()=>{
//  if(counter>0){
//   setCounter((prev) => prev-1);
//  }
// }

//============================= Task 2 ==================================

// const [todos, setTodos]=useState(['todo 1','todo 2'])


//============================= Task 3 =================================

// const obj = {
//   src : "https://images.pexels.com/photos/14969818/pexels-photo-14969818/free-photo-of-gas-station-at-night-time.jpeg",
//   width : "100px",
//   height : "100px"
// }

return (
    <> 
     {/* //============== Task 1 ===============================  */}
      {/* <h1>Chai aur react</h1>
      <h2>Counter value:{counter} is {(counter)%2==0?'Even':'odd'}</h2>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
       <footer>Footer:{counter}</footer> */}


      {/* //=================== Task 2 ==========================  */}
      {/* {todos.map((v,idx) => <li key={idx}> {v} </li>)} */}

      {/* //==================== Task 3 =========================== */}
       {/* <Avatar {...obj}></Avatar>
       
       <Avatar src="https://images.pexels.com/photos/8451450/pexels-photo-8451450.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" width="100px" height="100px"></Avatar>
       
       <Avatar src="https://images.pexels.com/photos/10024815/pexels-photo-10024815.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" width="100px" height="100px">
           <span>Child tag</span>
       </Avatar> */}
      
      {/* //====================== Task 4 =============================  */}
      {/* <Counter></Counter> */}
    </>
   
  )
}

export default App
