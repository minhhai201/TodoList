import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TodoListContext } from '../../App'

export default function Navbar() {
   const [todoList, setTodoList, searchTask, setSearchTask] = useContext(TodoListContext)
   const [search, setSearch] = useState('')
   const navigate = useNavigate()
   let listTask = [
      { path: '/', text: 'All Task', cName: "nav-text" },
      { path: '/new-task', text: 'New Task', cName: "nav-text" },
      { path: '/doing-task', text: 'Doing Task', cName: "nav-text" },
      { path: '/done-task', text: 'Done Task', cName: "nav-text" },
   ]
   // const handleSearchSubmit = (keyWork) => {
   //    const todoSearchList = todoList.filter(item => {
   //       return item.title.toUpperCase().search(keyWork.toUpperCase()) !== -1
   //    })
   //    setSearchTask(todoSearchList)
   //    navigate(`/search-task`)
   // }

   return (
      <div className='wrapper'>
         <div className="header">
            <NavLink to={'/create-task'}>
               <input type="text" value="Create New task" className='create-task' />
            </NavLink>
            <div className="search">
               <input type="search"
                  className='search-task'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Type something to search' />
               <NavLink to={'/search-task'}>
                  <button
                     className='btn-search'
                     type='button'>Search</button>
               </NavLink>
            </div>
         </div>
         <div className="navbar">
            <ul className='nav-menu-items'>
               {listTask.map((item, index) => {
                  return (
                     <li key={index} className={item.cName}>
                        <NavLink to={item.path}>
                           <span>{item.text}</span>
                        </NavLink>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   )
}