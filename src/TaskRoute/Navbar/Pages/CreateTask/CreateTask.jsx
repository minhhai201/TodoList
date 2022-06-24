import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useCreateTask from './useCreateTask'

export default function CreateTask() {
    const [handleCreateTask] = useCreateTask()

    const [title, setTitle] = useState('')
    const [creator, setCreator] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('New')

    const navigate = useNavigate()
    const addTask = (e) => {
        e.preventDefault()
        handleCreateTask(title, creator, createdAt, description, status)
        navigate('/')
    }


    return (
        <div className='create'>
            <form action="">
                <p>Title &emsp;&emsp;&emsp;&nbsp;&nbsp;
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Place holder'
                        value={title} />
                </p>
                <p>Creator &emsp;&emsp;
                    <input
                        type="text"
                        onChange={(e) => setCreator(e.target.value)}
                        placeholder='Name of Creator'
                        value={creator} />
                </p>
                <p>Created at &nbsp; &nbsp;
                    <input
                        type="text"
                        onChange={(e) => setCreatedAt(e.target.value)}
                        placeholder='08-02-2021 07:45:2020'
                        value={createdAt} />
                </p>
                <p>Description &nbsp;
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description Detail'
                        value={description} />
                </p><br /><br />
                <b className='save' onClick={addTask}>Save</b>
            </form>
        </div>
    )
}