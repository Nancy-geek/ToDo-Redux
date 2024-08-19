import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanid is just for creating unique id 

const initialState={
    todos: [{id: 1, text:"hello world"}]
}
function sayhello(){
    console.log("hello guys");
}

// Slice - reducer ka bada version , reducer- functionality
export const todoSlice= createSlice({        // objects in method
    name: "nancy",      // by dfault present property in this
    initialState,        // every slice has intialState , can describe here also instead of above
    
    // reducers:{            // fun and properties in it
    // addtodo: sayhello,
    // } ,   
    
    reducers:{         // or describe here 
    addtodo: (state, action)=>{
        //state - current initial state jo jo bhi h unka access
        // action - jo value aayi h 
        const todo={
            id: nanoid(),
            text: action.payload           // payload is a object automatically getting here the text 
        }
        state.todos.push(todo)
    },
    removetodo: (state, action)=>{
        state.todos= state.todos.filter((todo)=>{
            todo.id!==action.payload
        })
    },
    updatetodo : (state , action)=>{
        state.todos.map((todo)=> todo.id===action.payload ? text=action.payload : text);
    }

    }
    
})
export const {addtodo, removetodo}= todoSlice.actions
//  exporting individual functionality that are take from actions 

export default todoSlice.reducer      //as store need awareness about all reducers, then only it will keep it 

/* in context api , we were declaring function not writting its definition .
  in rtk we write function definition not declaration 
*/
