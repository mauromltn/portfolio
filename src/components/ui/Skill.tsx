import styles from '../../styles/Skill.module.scss'

function Skill() {
   return (
      <>
      <h1>Skills:</h1>
        <div className={styles.skills}>
          <p>Swift</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>   
          <p>React</p>
          <p>Figma</p>
        </div>
      </>
   )
}

export default Skill