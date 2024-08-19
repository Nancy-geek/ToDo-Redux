import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'            // wrap krne ke liye we neede provider like used in context api 
// import in main or app baat to vohi h , 
import {store} from './app/store.js'
import AddTodo from './components/Addtodo.jsx'
import Todos from './components/Todos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>        
  {/* idhar prop ko value na bolke bas store bolte h  */}
    <App />
    <AddTodo />
    <Todos/>
  </Provider>,
)
