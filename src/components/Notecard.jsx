import React from 'react'

export const Notecard = ({ task }) => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {task.map(function(elem, idx){

            return <div key={idx} className=" bg-cover bg-[url('https://img.favpng.com/22/19/18/paper-post-it-note-square-rectangle-picture-frames-png-favpng-1AXk0W5UdYrYzJqKdNSPCEuW5.jpg')] rounded-lg shadow p-5">
            <h3 className="text-xl font-semibold mb-2">
              {elem.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {elem.details}
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
