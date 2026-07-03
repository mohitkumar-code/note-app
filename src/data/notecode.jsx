import React, { useState } from 'react'
import { Notecard } from '../components/Notecard'

const notecode = () => {

    

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()
        
        const copyTask= [...task];

        copyTask.push({title, details})
        
        setTask(copyTask)
        console.log(task)


        setTitle('')
        setDetails('')
        
    }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          📝 My Notes
        </h1>

        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <input
            type="text"
            placeholder="Enter note title"
            className="w-full border rounded-md p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea
            rows="4"
            placeholder="Write your note..."
            className="w-full border rounded-md p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          ></textarea>

          <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-5 py-2 rounded-md transition">
            Add Note
          </button>
        </form>

        <Notecard />

      </div>
    </div>
  )
}

export default notecode