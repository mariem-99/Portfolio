import './Header.css'
function Header({name,tagLine}){
    return(
        <header className='header' id='home'>
            <div className='header-content'>
                {/*display the name as main header  */}
                <h1 className='header-name'>{name}</h1>
                <p className='header-tagLine'>{tagLine}</p>
                {/*navigation links(just for diplay, not functional yet) */}
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                        <a href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <a href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;