import styles from '../../styles/projects.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { projects: data }
  };
};

const projects = ({ projects }) => {
  return (
    <div>
      <h1>All projects</h1>
      {projects.map((project) => (
        <Link href={'/projects/' + project.id} key={project.id}>
          <a className={styles.single}>
            <h3>{project.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default projects;
