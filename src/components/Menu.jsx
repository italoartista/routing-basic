import { Link } from 'react-router-dom'

function Menu() { 
    return (
        <nav>
            <ul style={{listStyle: 'none', display: 'flex', gap: '12px'}}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}
export default Menu;