import PageWrapper from './components/pages/PageWrapper';
import SplashPage from './components/pages/SplashPage';
import TaskListPage from './components/pages/TaskListPage';
import TaskPage from './components/pages/TaskPage';

const siteRoutes = {
  path: '/',
  component: PageWrapper,
  indexRoute: { component: SplashPage },
  childRoutes: [
    { path: 'tasks', component: TaskListPage },
    { path: 'tasks/:taskId', component: TaskPage },
  ],
};

const routes = [
  siteRoutes,
];

export default routes;
