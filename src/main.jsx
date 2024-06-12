import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todo from './pages/Todo.jsx'
import ResourceForm from './pages/Resource.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TodoDetail from './pages/TodoDetail.jsx'
import AddTodo from './pages/AddTodo.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import ProductPage from './pages/ProductPage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/"   element={<App title="MY TITLE"  tagline="REACTIVITY ON FLY" />}/>
          <Route path="/todos" element={<Todo/>} />
          <Route path='/todos/:id/' element={<TodoDetail/>} />
          <Route path="/add" element={<AddTodo/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>

    {/* <App title="MY TITLE"  tagline="REACTIVITY ON FLY" /> */}
  {/* <ResourceForm/> */}
    {/* <Todo />
    <h1>THIS IS ROOT APP</h1>
    <p>THIS IS A NORMAL APP</p> */}
  </React.StrictMode>,
)
