import * as pages from './components/pages';

const siteRoutes = {
  path: '/',
  component: pages.PageWrapper,
  indexRoute: { component: pages.SplashPage },
  childRoutes: [
    { path: 'faq', component: pages.FAQPage },
    { path: 'about', component: pages.AboutPage },
    { path: 'tasks', component: pages.TaskListPage },
    { path: 'tasks/:taskId', component: pages.TaskPage },
  ],
};

// Array as we can add other types later (e.g. admin or logged in routes)
const routes = [
  siteRoutes,
];

export default routes;
