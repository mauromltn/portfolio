import styles from '../../styles/Skill.module.scss'

function Skill() {
   return (
      <>
      <h1>Skills:</h1>
        <div className={styles.skills}>
          <div className={styles.skill}>Swift</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>JavaScript</div>   
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>Figma</div>
        </div>
      </>
   )
}

export default Skill