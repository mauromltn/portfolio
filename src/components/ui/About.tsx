import styles from '../../styles/About.module.scss';

function About() {
  return (
    <>
        <h1 className={styles.header}>About:</h1>
        <p>
            Hey, I’m Mauro a 19 year old developer from Italy, specializing in Front-End and iOS Development. 
            I bring ideas to life through code and strengthen my skills through projects. I’m currently studying 
            Computer Science in high school while learning on Codecademy.
        </p>
        <p>
            For more, check out my <a href="https://github.com/mauromltn">GitHub Page</a>.
        </p>
    </>
  )
}

export default About