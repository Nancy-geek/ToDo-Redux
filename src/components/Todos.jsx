import React from 'react'
import { useSelector } from 'react-redux'         // select krna h as values leni h
import {useDispatch } from 'react-redux'              // as delete bhi to krna h to kuch action to krna h 
import { removetodo } from '../features/todoSlice'


function Todos() {
    const dispatch = useDispatch()
    // useSelector(state)     as ek hi state h or 
   const todos= useSelector((state)=>state.todos)        // useSelector se state ka access milta h 
  return (
    <>
    {/* <div className='mb-6'>Todos</div>    */}
    { todos.map((todo)=>(
        <li className='p-2 m-4 rounded-md bg-black text-white flex justify-between max-w-lg' key={todo.id}>
            {todo.text};
            <button  className='bg-yellow-200 text-black px-6 rounded '
            // onClick={dispath()}         // not allowed as yaha sirf refrence dena allowed h and then vo immediately execute ho jayega so 
            onClick={()=>dispatch(removetodo(todo.id))}
            > 
            X</button>
        </li>
    ))}
</>
  )
}

export default Todos