import * as pages from './components/pages';
import { requireLocation } from './requireLocation';

// ALL routes must have a name prop! This is used by the navbar
function siteRoutes(store: any) {
  return {
    path: '/',
    name: 'splash',
    component: pages.PageWrapper,
    indexRoute: { component: pages.SplashPage },
    onChange: (prevState: any, nextState: any) => { window.scrollTo(0, 0); },
    childRoutes: [
      { name: 'faq', path: 'faq', component: pages.FAQPage },
      { name: 'about', path: 'about', component: pages.AboutPage },
      { name: 'tasks', path: 'tasks', component: pages.TaskListPage, onEnter: requireLocation(store) },
      { name: 'task', path: 'tasks/:taskId', component: pages.TaskPage, onEnter: requireLocation(store) },
      { name: 'issues', path: 'issues', component: pages.IssueListPage },
      { name: 'issue', path: 'issues/:issueId', component: pages.IssuePage },
    ],
  };
}

export default (store: any) => {
  return siteRoutes(store);
};
