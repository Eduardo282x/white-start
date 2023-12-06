import { Header } from '../Header/Header.jsx'
import { Home } from '../Home/Home.jsx'
import './layout.css'
export const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <Home/>
        </div>
    )
}
