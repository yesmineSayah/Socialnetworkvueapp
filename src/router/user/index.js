import CoursRouter from './cours';
import ProjectsRouter from './project';
import Cours from '../../components/user/cours/Cours';
import Projects from '../../components/user/projects/Projects';

export default [
    {
        path: 'cours',
        component: Cours,
        children: CoursRouter
    },
    {
        path: 'projects',
        component: Projects,
        children: ProjectsRouter
    }
]