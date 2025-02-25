import styles from '../styles/Project.module.scss';
interface ProjectCardProps {
    name: string
    link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, link }) => {
    const handleClick = () => {
        window.open(link, '_blank')
    }

    return (
        <div className={`${styles.projectCard} ${styles.bigCursor}`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.arrowUp}>
                <path fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
            </svg>
            <p>{name}</p>
        </div>
    )
}

export default ProjectCard