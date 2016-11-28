import { PageWrapper, SplashPage, TaskListPage, TaskPage } from './components/pages';

const siteRoutes = {
  path: '/',
  component: PageWrapper,
  indexRoute: { component: SplashPage },
  childRoutes: [
    { path: 'tasks', component: TaskListPage },
    { path: 'tasks/:taskId', component: TaskPage },
  ],
};

// Array as we can add other types later (e.g. admin or logged in routes)
const routes = [
  siteRoutes,
];

export default routes;
