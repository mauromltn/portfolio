import ProjectCard from "../ProjectCard"
import styles from '../../styles/Project.module.scss';

const Project: React.FC = () => {
    return (
        <section id="project">
            <h1>Projects:</h1>
            <div className={styles.projects}>
                <ProjectCard
                    name="Portfolio"
                    link="https://github.com/mauromltn/portfolio-website"
                />
                <ProjectCard
                    name="CineMood"
                    link="https://github.com/mauromltn/cine-mood"
                />
                <ProjectCard
                    name="Travel Agency"
                    link="https://github.com/mauromltn/Travel-Agency"
                />
                <ProjectCard
                    name="Form UI"
                    link="https://github.com/mauromltn/SignUp-Page"
                />
                <ProjectCard
                    name="To-Do List"
                    link="https://github.com/mauromltn/ToDoList"
                />
                <ProjectCard
                    name="Card Blur"
                    link="https://github.com/mauromltn/progressive-blur"
                />
            </div>
        </section>
    );
};

export default Project;