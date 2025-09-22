// pages/ProjectDetail.jsx
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ProjectDetail from '../components/ProjectDetail';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      images={project.images}
      links={project.links}
    />
  );
}
