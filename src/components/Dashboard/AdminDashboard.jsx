// import React from 'react'
// import Header from '../other/Header'
// import {CreateTask} from '../other/CreateTask'
// import AllTask from '../other/AllTask'

// const AdminDashboard = (props) => {
//   return (
//     <div  className='h-screen w-full p-7'>
//       <Header changeUser={props.changeUser}/>
//       <CreateTask/>
//       <AllTask/>
//     </div>
//   )
// }

// export default AdminDashboard


// updated

import React from 'react'
import Header from '../other/Header'
import {CreateTask} from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div  className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} data={null}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard



// import Header from '../other/Header'
// import { CreateTask } from '../other/CreateTask'
// import AllTask from '../other/AllTask'

// const AdminDashboard = (props) => {
//   return (
//     <div className='h-screen w-full p-7'>
//       {/* Pass 'data' prop to Header */}
//       <Header changeUser={props.changeUser} data={props.data} />
//       <CreateTask />
//       <AllTask />
//     </div>
//   )
// }

// export default AdminDashboard

































