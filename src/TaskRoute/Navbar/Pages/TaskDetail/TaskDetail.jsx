import React from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useTaskDetail from './useTaskDetail'

export default function TaskDetail() {
   const [handleUpdateTaskItem, handleDeleteTaskItem] = useTaskDetail()
   const { id } = useParams()
   const location = useLocation()
   const [titleItem, setTitle] = useState('')
   const [creatorItem, setCreator] = useState('')
   const [createdAtItem, setCreatedAt] = useState('')
   const [descriptionItem, setDescription] = useState('')
   const [statusItem, setStatu] = useState('')

   const reset = () => {
      setCreatedAt('')
      setCreator('')
      setDescription('')
      setStatu('')
      setTitle('')
   }


   return (
      <div className='create'>
         <form action="">
            <p>Title &emsp;&emsp;&emsp;&ensp;
               <input type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={location.state.title}
                  value={titleItem} />
            </p>
            <p>Creator &emsp;&emsp;&nbsp;
               <input 
                  type="text"
                  onChange={(e) => setCreator(e.target.value)}
                  placeholder={location.state.creator}
                  value={creatorItem} />
            </p>
            <p>Created at &emsp;
               <input
                  type="text"
                  onChange={(e) => setCreatedAt(e.target.value)}
                  placeholder={location.state.createdAt}
                  value={createdAtItem} />
            </p>
            <p>Description &ensp;
               <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={location.state.description}
                  value={descriptionItem} />
            </p><br/>
            <span>
               <input
                  type="radio"
                  name='statu'
                  onChange={() => setStatu('New')}
                  value={statusItem} /> New &emsp;&emsp;&emsp;
            </span>
            <span>
               <input
                  type="radio"
                  name='statu'
                  onChange={() => setStatu('Doing')}
                  value={statusItem} /> Doing &emsp;&emsp;&emsp;
            </span>
            <span>
               <input
                  type="radio"
                  name='statu'
                  onChange={() => setStatu('Done')}
                  value={statusItem} /> Done 
            </span><br /><br /><br />
            <b className='btn' onClick={() => handleUpdateTaskItem(
               {
                  id: id,
                  title: titleItem,
                  creator: creatorItem,
                  createdAt: createdAtItem,
                  description: descriptionItem,
                  status: statusItem
               }
            )}>Save</b>
            <b className='btn' onClick={reset}>Reset</b>
            <b className='btn' onClick={() => handleDeleteTaskItem(id)}>Delete</b>
         </form>
      </div>
   )
}