import styles from '../../styles/Navbar.module.scss'

function Navbar() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#connect">Connect</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar