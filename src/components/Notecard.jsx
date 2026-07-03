import React from 'react'
import { task } from '../data/notecode.jsx'

export const Notecard = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {task.map(function(elem, idx){

            return <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-xl font-semibold mb-2">
              React Basics
            </h3>

            <p className="text-gray-600 mb-4">
              Learn components, props and state today.
            </p>

            <button className="bg-red-500 active:scale-95 hover:bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
          })}
          
        </div>
    </div>
  )
}
