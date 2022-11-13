import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/authContext'
import { DashboardProvider } from '../context/dashboardContext'
import Beranda from '../pages/beranda/beranda'
import ChangePassword from '../pages/changePass/changePassword'
import CreateData from '../pages/createData/createData'
import Dashboard from '../pages/dashboard/dashboard'
import ListJob from '../pages/listjob/listJob'
import Login from '../pages/login/login'
import Lowongan from '../pages/lowongan/lowongan'
import LowonganDetail from '../pages/lowonganDetail/lowonganDetail'
import Profile from '../pages/profile/profile'
import Register from '../pages/register/register'
import LayoutBeranda from '../widgets/LayoutBeranda'
import LayoutDashboard from '../widgets/LayoutDashboard'
import DashboardRoute from './DashboardRoute'
import LoginRoute from './LoginRoute'

const Router = () => {
  return (
    <BrowserRouter>
        <AuthProvider>    
            <DashboardProvider>
            <Routes>
                <Route path='/' element={
                    <LayoutBeranda>
                        <Beranda/>
                    </LayoutBeranda>
                } />
                <Route path='/lowongan' element={
                    <LayoutBeranda>
                        <Lowongan />
                    </LayoutBeranda>
                } />
                <Route path='/lowongan/:IdData' element={
                    <LayoutBeranda>
                        <LowonganDetail />
                    </LayoutBeranda>
                } />



                <Route path='/dashboard' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <Dashboard/>
                        </LayoutDashboard>
                    </DashboardRoute>    
                } />
                <Route path='/dashboard/list-job-vacancy' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <ListJob/>
                        </LayoutDashboard>
                    </DashboardRoute>
                } />
                <Route path='/dashboard/list-job-vacancy/edit/:ID_GAMES' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <CreateData/>
                        </LayoutDashboard>
                    </DashboardRoute>
                }/>
                <Route path='/dashboard/list-job-vacancy/form' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <CreateData/>
                        </LayoutDashboard>
                    </DashboardRoute>
                } />
                <Route path='/dashboard/profile' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <Profile/>
                        </LayoutDashboard>
                    </DashboardRoute>
                } />
                <Route path='/dashboard/change-password' element={
                    <DashboardRoute>
                        <LayoutDashboard>
                            <ChangePassword/>
                        </LayoutDashboard>
                    </DashboardRoute>
                } />



                <Route path='/login' element={
                     <LoginRoute>
                        <Login/>
                     </LoginRoute>
                     } />
                <Route path='/register' element={
                    <LoginRoute>
                        <Register/>
                    </LoginRoute>
                } />

            </Routes>        
            </DashboardProvider>        
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
