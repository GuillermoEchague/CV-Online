import styles from './ProjectsStyles.module.css';
import home from '../../assets/home.png';
import img1 from '../../assets/img1.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={home}
          link="https://github.com/GuillermoEchague/react-gifexpertapp"
          h3="React"
          p="React App with Firebase"
        />
        <ProjectCard
          src={img1}
          link="https://github.com/GuillermoEchague/App1_react_firebase"
          h3="React"
          p="React App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/GuillermoEchague/Proyecto-React-Native"
          h3="React Native"
          p="JavaScript"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/GuillermoEchague/MovieApp"
          h3="Android"
          p="Kotlin"
        />
      </div>
    </section>
  );
}

export default Projects;
