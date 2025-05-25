// import React from 'react'

// const CompleteTask = ({data}) => {
//   return (
//   <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
//         <div className="flex justify-between items-center">
//            <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
//           <h4 className='text-sm'>{data.taskDate}</h4>
//         </div>
//          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

//           <p className='text-sm mt-2'>
//           {data.taskDescription}
//         </p>

//         <div className='mt-6'>
//           <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Completed</button>
//         </div>
//       </div>
//   )
// }

// export default CompleteTask



// import React from 'react'

// const CompleteTask = ({ data }) => {
//   return (
//     <div className="flex-shrink-0 h-full w-[320px] p-6
//       bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
//       rounded-xl border border-blue-700 shadow-lg">
      
//       <div className="flex justify-between items-center mb-3">
//         <h3 className="bg-gradient-to-r from-red-700 to-red-800
//           text-white text-xs font-semibold uppercase px-4 py-1 rounded-full tracking-wide shadow-sm">
//           {data.category}
//         </h3>
//         <h4 className="text-blue-300 text-xs font-medium">{data.taskDate}</h4>
//       </div>

//       <h2 className="text-2xl font-bold text-white mb-4">{data.taskTitle}</h2>

//       <p className="text-blue-200 text-sm leading-relaxed mb-6">
//         {data.taskDescription}
//       </p>

//       <div className="mt-6">
//         <button
//           className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-200
//           text-white font-semibold py-2 rounded-md shadow-md"
//           disabled>
//           Completed
//         </button>
//       </div>
//     </div>
//   )
// }

// export default CompleteTask



// import React from 'react'

// const CompleteTask = ({ data }) => {
//   return (
// <div
//   className="flex-shrink-0 h-full w-[320px] p-6
//     bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800
//     rounded-2xl border border-slate-600 shadow-md
//     hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-default"
// >


//       <div className="flex justify-between items-center mb-4">
//         <h3
//           className="bg-gradient-to-r from-red-600 via-red-700 to-red-800
//             text-white text-xs font-semibold uppercase px-5 py-1 rounded-full tracking-wider
//             shadow-md"
//         >
//           {data.category}
//         </h3>
//         <h4 className="text-blue-300 text-xs font-semibold tracking-wide">
//           {data.taskDate}
//         </h4>
//       </div>

//       <h2 className="text-3xl font-extrabold text-white mb-5 leading-snug font-sans">
//         {data.taskTitle}
//       </h2>

//       <p className="text-blue-200 text-sm leading-relaxed mb-8 font-light">
//         {data.taskDescription}
//       </p>

//  <button
//   disabled
//   className="
//     w-full
//     bg-gradient-to-r from-green-600 to-green-700
//     text-white
//     font-semibold
//     uppercase
//     tracking-wide
//     py-3
//     rounded-lg
//     shadow-md
//     cursor-not-allowed
//     select-none
//     transition
//     duration-150
//     ease-in-out
//     disabled:opacity-90
//     active:scale-95
//     active:shadow-sm
//   "
// >
//   Completed
// </button>


//     </div>
//   )
// }

// export default CompleteTask


// import React from 'react'

// const CompleteTask = ({ data }) => {
//   return (
//     <div
//       className="
//         watery-card
//         flex-shrink-0 h-full w-[320px] p-6
//         cursor-pointer
//       "
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-xs font-semibold uppercase px-5 py-1 rounded-full tracking-wider shadow-md">
//           {data.category}
//         </h3>
//         <h4 className="text-blue-300 text-xs font-semibold tracking-wide">
//           {data.taskDate}
//         </h4>
//       </div>

//       <h2 className="text-3xl font-extrabold text-white mb-5 leading-snug font-sans">
//         {data.taskTitle}
//       </h2>

//       <p className="text-blue-200 text-sm leading-relaxed mb-8 font-light">
//         {data.taskDescription}
//       </p>

//       <button
//         disabled
//         className="
//           w-full
//           bg-gradient-to-r from-green-600 to-green-700
//           text-white
//           font-semibold
//           uppercase
//           tracking-wide
//           py-3
//           rounded-lg
//           shadow-md
//           cursor-not-allowed
//           select-none
//           transition
//           duration-150
//           ease-in-out
//           disabled:opacity-90
//           active:scale-95
//           active:shadow-sm
//         "
//       >
//         Completed
//       </button>
//     </div>
//   )
// }

// export default CompleteTask



import React, { useState, useRef } from 'react';

const CompleteTask = ({ data }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const cardRef = useRef(null);

  const handleClick = () => {
    setIsRotating(true);
  };

  const handleAnimationEnd = () => {
    setIsRotating(false);
  };

  const handleMouseMove = (e) => {
    if (isRotating) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;

    // Adjust max angle (25°)
    const maxAngle = 25;
    const rotateY = ((x - centerX) / centerX) * maxAngle;
    setRotation(rotateY);
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  return (
    <div
      ref={cardRef}
      className={`
        flex-shrink-0 h-full w-[320px] p-6 rounded-xl border border-slate-600 shadow-lg cursor-pointer
        bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white
        transition-transform duration-300 ease-in-out
        ${isRotating ? 'animate-rotate360' : ''}
      `}
      style={{
        perspective: '800px',
        transform: `perspective(800px) rotateY(${rotation}deg)`
      }}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-xs font-semibold uppercase px-5 py-1 rounded-full shadow-md">
          {data.category}
        </h3>
        <h4 className="text-blue-300 text-xs font-semibold">{data.taskDate}</h4>
      </div>

      <h2 className="text-2xl font-bold mb-4">{data.taskTitle}</h2>
      <p className="text-sm text-blue-200 mb-6">{data.taskDescription}</p>

      <div className="mt-auto">
        <button
          disabled
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold uppercase tracking-wide py-2 rounded-lg shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
