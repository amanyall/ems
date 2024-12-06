import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import CreateTask from './components/others/CreateTask'
import AllTask from './components/others/AllTask'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

   const [user, setUser] = useState(null)
   // to check auth (email/pass)
   const handleLogin = (email, password) => {
      if(email ==)
   }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    {/* <CreateTask/>
    <AllTask/> */}
    
    </>
  )
}

export default App
