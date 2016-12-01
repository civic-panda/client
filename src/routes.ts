import { PageWrapper, SplashPage, TaskListPage, TaskPage } from './components/pages';

// ALL routes must have a name prop! This is used by the navbar
const siteRoutes = {
  path: '/',
  name: 'splash',
  component: PageWrapper,
  indexRoute: { component: SplashPage },
  childRoutes: [
    { name: 'tasks', path: 'tasks', component: TaskListPage },
    { name: 'task', path: 'tasks/:taskId', component: TaskPage },
  ],
};

// Array as we can add other types later (e.g. admin or logged in routes)
const routes = [
  siteRoutes,
];

export default routes;
