import { Header } from '../Header/Header.jsx'
import './layout.css'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <Outlet/>
        </div>
    )
}
