import React from 'react'
import MainPage from '../general/MainPage'
import Admin from '../admin/Admin'
import Teachers from '../teachers/Teachers'
import Parents from '../parents/Parents'
import { Routes, Route, Switch } from 'react-router-dom'
import Login from '../general/Login'
import AdminProfileTeacher from '../admin/AdminProfileTeacher'

const Pages = () => {

    //Duong dan cho cac trang
    return <>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin/:adminId' element={<Admin />} />
            <Route path='/teachers/:teacherId' element={<Teachers />} />
            <Route path='/parents/:parentId' element={<Parents />} />
            <Route path='/profileTeacher/:teacherId' element={<AdminProfileTeacher />} />
        </Routes>
    </>

}

export default Pages