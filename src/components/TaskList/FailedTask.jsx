import React from 'react'

const FailedTask = () => {
  return (
     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

          <p className='text-sm mt-2'>
            {data.taskDescription}
         </p>
         
          <div className='mt-6'>
          <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
        </div>
      </div>
     
  )
}

export default FailedTask



// import React from 'react';

// const FailedTask = ({ data }) => {
//   return (
//     <div
//       className="flex-shrink-0 h-full w-[320px] p-6 rounded-xl border border-yellow-700 shadow-lg cursor-pointer
//       bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 text-white transition-transform duration-300 ease-in-out"
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-xs font-semibold uppercase px-4 py-1 rounded-full shadow-sm">
//           {data.category}
//         </h3>
//         <h4 className="text-white text-xs font-semibold">{data.taskDate}</h4>
//       </div>

//       <h2 className="text-2xl font-bold mb-3">{data.taskTitle}</h2>
//       <p className="text-sm text-yellow-100 mb-6">{data.taskDescription}</p>

//       <div className="mt-auto">
//         <button
//           disabled
//           className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold uppercase tracking-wide py-2 rounded-lg shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
//         >
//           Failed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FailedTask;
