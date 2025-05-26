// import {React, useState} from 'react'
// const Header = (props) => {

// const logOutUser = () =>{
// localStorage.setItem('loggedInUser', '')
// props.changeUser('')
// } 

//   return (
//      <div className='flex items-end justify-between'>
//      <h1 className='text-2xl font-medium text-amber-50'>HELLO<br/> <span className='text-3xl font-semibold text-amber-50'>username✌️</span></h1>
//      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   )
// }

// export default Header


// updated



import {React, useState} from 'react'

const Header = (props) => {

const logOutUser = () =>{
localStorage.setItem('loggedInUser', '')
props.changeUser('')
} 

// Get current date and time
const getCurrentDateTime = () => {
  const now = new Date()
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return now.toLocaleDateString('en-US', options)
}

// Calculate total projects (unique categories from tasks)
const getTotalProjects = (data) => {
  if (!data || !data.tasks) return 0
  const uniqueCategories = new Set(data.tasks.map(task => task.category))
  return uniqueCategories.size
}

// Get profession based on most common task category
const getProfession = (data) => {
  if (!data || !data.tasks || data.tasks.length === 0) return 'Employee'
  
  const categoryCount = {}
  data.tasks.forEach(task => {
    categoryCount[task.category] = (categoryCount[task.category] || 0) + 1
  })
  
  const mostCommonCategory = Object.keys(categoryCount).reduce((a, b) => 
    categoryCount[a] > categoryCount[b] ? a : b
  )
  
  // Map categories to professions
  const professionMap = {
    'Design': 'UI/UX Designer',
    'Development': 'Software Developer',
    'DevOps': 'DevOps Engineer',
    'QA': 'Quality Assurance',
    'Database': 'Database Administrator',
    'Documentation': 'Technical Writer',
    'Meeting': 'Project Manager',
    'Presentation': 'Business Analyst',
    'Support': 'Customer Support'
  }
  
  return professionMap[mostCommonCategory] || 'Software Engineer'
}

  return (
     <div className='flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-lg border border-gray-700'>
       {/* Left Section - User Info */}
       <div className='flex items-center space-x-6'>
         {/* Avatar */}
         <div className='w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'>
           <span className='text-2xl font-bold text-white'>
             {props.data ? props.data.firstName.charAt(0).toUpperCase() : 'A'}
           </span>
         </div>
         
         {/* User Details */}
         <div className='flex flex-col'>
           <div className='flex items-center space-x-3 mb-1'>
             <h1 className='text-3xl font-bold text-white'>
               {props.data ? props.data.firstName : 'Admin'}
             </h1>
             <span className='text-2xl'>👋</span>
           </div>
           
           <div className='flex items-center space-x-4 text-sm'>
             <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-medium'>
               {props.data ? getProfession(props.data) : 'System Administrator'}
             </span>
             
             {props.data && (
               <div className='flex items-center space-x-1 text-gray-300'>
                 <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                   <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                 </svg>
                 <span>{getTotalProjects(props.data)} Projects</span>
               </div>
             )}
           </div>
         </div>
       </div>
       
       {/* Center Section - Date & Time */}
       <div className='hidden md:flex flex-col items-center text-center'>
         <div className='text-gray-400 text-sm font-medium mb-1'>Current Time</div>
         <div className='text-white text-lg font-semibold'>
           {getCurrentDateTime()}
         </div>
       </div>
       
       {/* Right Section - Actions */}
       <div className='flex items-center space-x-4'>
         {props.data && (
           <div className='hidden lg:flex items-center space-x-4 text-sm text-gray-300'>
             <div className='text-center'>
               <div className='text-emerald-400 font-bold text-lg'>{props.data.taskCounts.active}</div>
               <div>Active</div>
             </div>
             <div className='text-center'>
               <div className='text-blue-400 font-bold text-lg'>{props.data.taskCounts.completed}</div>
               <div>Done</div>
             </div>
             <div className='text-center'>
               <div className='text-yellow-400 font-bold text-lg'>{props.data.taskCounts.newTask}</div>
               <div>New</div>
             </div>
           </div>
         )}
         
         <button 
           onClick={logOutUser} 
           className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2'
         >
           <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
             <path fillRule='evenodd' d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z' clipRule='evenodd'/>
           </svg>
           <span>Logout</span>
         </button>
       </div>
     </div>
  )
}

export default Header

