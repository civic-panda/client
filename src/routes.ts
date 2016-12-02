import * as pages from './components/pages';

// ALL routes must have a name prop! This is used by the navbar
const siteRoutes = {
  path: '/',
  name: 'splash',
  component: pages.PageWrapper,
  indexRoute: { component: pages.SplashPage },
  childRoutes: [
    { name: 'faq', path: 'faq', component: pages.FAQPage },
    { name: 'about', path: 'about', component: pages.AboutPage },
    { name: 'tasks', path: 'tasks', component: pages.TaskListPage },
    { name: 'task', path: 'tasks/:taskId', component: pages.TaskPage },
  ],
};

// Array as we can add other types later (e.g. admin or logged in routes)
const routes = [
  siteRoutes,
];

export default routes;
