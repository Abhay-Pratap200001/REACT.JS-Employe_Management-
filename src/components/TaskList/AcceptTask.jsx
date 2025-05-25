// import React from 'react'

// const AcceptTask = ({data}) => {
//   console.log();
  
//   return (
//      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
//        <div className="flex justify-between items-center">
//           <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
//           <h4 className='text-sm'>{data.taskDate}</h4>
//     </div>
//         <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//         <p className='text-sm mt-2'>
//          {data.taskDescription}
//         </p>

//     <div className='flex justify-between mt-4'>
//           <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
//           <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
//      </div>
//    </div>
//   )
// }

// export default AcceptTask


import React from 'react'
const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 
      bg-gradient-to-br from-gray-800 via-gray-900 to-black 
      rounded-xl border border-gray-700 shadow-lg">
      
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-gradient-to-r from-purple-600 to-indigo-600 
          text-white text-xs font-semibold uppercase px-4 py-1 rounded-full tracking-wide shadow-sm">
          {data.category}
        </h3>
        <h4 className="text-gray-400 text-xs font-medium">{data.taskDate}</h4>
      </div>

      <h2 className="text-xl font-bold text-white mb-3">{data.taskTitle}</h2>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {data.taskDescription}
      </p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 hover:bg-green-700 transition-colors duration-200 
          text-white font-semibold py-2 px-4 rounded-md shadow-md" >
          Mark as Completed
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 transition-colors duration-200 
          text-white font-semibold py-2 px-4 rounded-md shadow-md">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
