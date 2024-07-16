import './Header.css'


function Header({ children }) {
    return (
        <header>

            <h1>IA</h1>
            {children}
        </header>
    )
}

export default Header;