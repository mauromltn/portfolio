import styles from '../../styles/Hero.module.scss'

function Hero() {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.textDiv}>
                <span>Mauro Montane</span>
                <span>Front-End Developer</span>
                <p>
                    Welcome to my portfolio here you can find information
                    <br />
                    about me and my projects.
                </p>
            </div>
            <div className={styles.arrowDown}>
                <a href="#about" aria-label="Swipe Down">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Hero