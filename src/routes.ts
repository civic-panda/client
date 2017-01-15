import * as pages from './components/pages';
import { requireLocation } from './requireLocation';

const scrollToTop = () => window.scrollTo(0, 0);

// ALL routes must have a name prop! This is used by the navbar
function siteRoutes(store: any) {
  return {
    path: '/',
    name: 'splash',
    component: pages.PageWrapper,
    indexRoute: { component: pages.ActOnThis },
    onChange: scrollToTop,
    childRoutes: [
      { name: 'faq', path: 'faq', component: pages.FAQPage },
      { name: 'about', path: 'about', component: pages.AboutPage },
      { name: 'tasks', path: 'tasks', component: pages.TaskListPage, onEnter: requireLocation(store) },
      { name: 'task', path: 'tasks/:taskId', component: pages.TaskPage, onEnter: requireLocation(store) },
      { name: 'causes', path: 'causes', component: pages.CauseListPage },
      { name: 'cause', path: 'causes/:causeName', component: pages.CausePageContainer },
      { name: 'causeTasks', path: 'causes/:causeName/tasks', component: pages.CauseTasksPage },
      { name: 'causeTask', path: 'causes/:causeName/tasks/:taskId', component: pages.TaskPage, onEnter: requireLocation(store) },
    ],
  };
}

export default (store: any) => {
  return siteRoutes(store);
};
