import Menu from '../components/Menu'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import {  Outlet } from 'react-router-dom'
function Layout()  { 
    return (
        <>
            <Header> 

                 <Menu />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <p>© 2021</p>
            </Footer>
        </>
    )
}

export default Layout;