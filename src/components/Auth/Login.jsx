// import {React, useState} from 'react'

// const Login = ({handleLogin}) => {
//      const [email, setEmail] = useState('')
//      const [password, setPassword] = useState('')

//       const submitHandler = (e) =>{
//       e.preventDefault()
//       handleLogin(email,password)
//       setEmail("")
//       setPassword("")
//     }

//  return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//       <div className='border-2 rounded-xl border-emerald-600 p-20'>

//          <form
//          onSubmit={(e) =>{
//             submitHandler(e)
//          }}
//          className='flex flex-col items-center justify-center'>
//            <input
//             value={email}
//             onChange={(e)=>{
//             setEmail(e.target.value)
//           }}

//              required
//              className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter you email'/>
//             <input
//             value={password}
//             onChange={(e) =>{
//               setPassword(e.target.value)
//             }}
//             required
//             className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password'/>
//             <button className=' mt-5 outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'>Log-in</button>
//          </form>
//       </div>
//     </div>
//   )
// }

// export default Login

// import { React, useState } from "react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-green-100 to-emerald-200">
//       <div className="border-2 rounded-2xl border-emerald-500 p-12 shadow-2xl bg-white w-[90%] max-w-md">
//         <h2 className="text-3xl font-semibold text-center text-emerald-700 mb-6 font-sans">
//           Welcome Back
//         </h2>
//         <form onSubmit={submitHandler} className="flex flex-col gap-4">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="text-black outline-none bg-emerald-50 border-2 border-emerald-500 focus:ring-2 focus:ring-emerald-400 text-lg py-3 px-5 rounded-lg placeholder:text-gray-500 transition duration-200"
//             type="email"
//             placeholder="Enter your email"
//           />

//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="text-black outline-none bg-emerald-50 border-2 border-emerald-500 focus:ring-2 focus:ring-emerald-400 text-lg py-3 px-5 rounded-lg placeholder:text-gray-500 transition duration-200"
//             type="password"
//             placeholder="Enter your password"
//           />

//           <button
//             type="submit"
//             className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     handleLogin(email, password)
//     setEmail("")
//     setPassword("")
//   }

//   return (
//     <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]'>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className='bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-md'
//       >
//         <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8">Welcome Back</h2>
//         <form onSubmit={submitHandler} className='flex flex-col gap-5'>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className='text-black outline-none bg-emerald-50 border-2 border-emerald-500 focus:ring-2 focus:ring-emerald-400 text-lg py-3 px-5 rounded-lg placeholder:text-gray-500 transition duration-200'
//             type="email"
//             placeholder='Enter your email'
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className='text-black outline-none bg-emerald-50 border-2 border-emerald-500 focus:ring-2 focus:ring-emerald-400 text-lg py-3 px-5 rounded-lg placeholder:text-gray-500 transition duration-200'
//             type="password"
//             placeholder='Enter your password'
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className='bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg mt-3'
//           >
//             Log In
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='bg-white shadow-2xl rounded-3xl p-16 w-[95%] max-w-2xl'
      >
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-10">Welcome Back</h2>
        <form onSubmit={submitHandler} className='flex flex-col gap-6'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-black outline-none bg-gray-400 border-2 border-gray-800 focus:ring-2 focus:ring-black-400 text-lg py-4 px-6 rounded-lg placeholder:text-gray-50 transition duration-200'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-black outline-none  bg-gray-400 border-2 border-gray-800 focus:ring-2 focus:ring-black-400 text-lg py-4 px-6 rounded-lg placeholder:text-gray-50 transition duration-200'
            type="password"
            placeholder='Enter your password'
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className='bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg mt-4 text-lg'
          >
            Log In
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default Login
