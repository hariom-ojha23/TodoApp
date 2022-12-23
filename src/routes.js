import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Home from './pages/home'
import Reminders from './pages/reminders'
import Trash from './pages/trash'
import Archive from './pages/archive'

// const Home = React.lazy(() => import('./pages/home'))
// const Reminders = React.lazy(() => import('./pages/reminders'))
// const Trash = React.lazy(() => import('./pages/trash'))

const routes = [
    {
        path: 'app',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'reminders', element: <Reminders /> },
            { path: 'archive', element: <Archive /> },
            { path: 'trash', element: <Trash /> },
            //{ path: '*', element: <Navigate to='/404' /> },
        ],
    }
]

export default routes