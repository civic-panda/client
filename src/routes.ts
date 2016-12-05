import * as pages from './components/pages';

// ALL routes must have a name prop! This is used by the navbar
const siteRoutes = {
  path: '/',
  name: 'splash',
  component: pages.PageWrapper,
  indexRoute: { component: pages.SplashPage },
  onChange: (prevState: any, nextState: any) => { window.scrollTo(0, 0); },
  childRoutes: [
    { name: 'faq', path: 'faq', component: pages.FAQPage },
    { name: 'about', path: 'about', component: pages.AboutPage },
    { name: 'tasks', path: 'tasks', component: pages.TaskListPage },
    { name: 'task', path: 'tasks/:taskId', component: pages.TaskPage },
    { name: 'issues', path: 'issues', component: pages.IssueListPage },
    { name: 'issue', path: 'issues/:issueId', component: pages.IssuePage },
  ],
};

// Array as we can add other types later (e.g. admin or logged in routes)
const routes = [
  siteRoutes,
];

export default routes;
