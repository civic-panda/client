import * as pages from './components/pages';
import FakeNewsEmbed from './components/FakeNewsEmbed';
import { requireLocation } from './requireLocation';

const scrollToTop = () => window.scrollTo(0, 0);

// ALL routes must have a name prop! This is used by the navbar
function siteRoutes(store: any) {
  return {
    path: '/',
    name: 'splash',
    component: pages.PageWrapper,
    indexRoute: { component: pages.SplashPage },
    onChange: scrollToTop,
    childRoutes: [
      { name: 'auth', path: 'auth', component: pages.AuthPage },
      { name: 'selectLocaton', path:'select-location', component: pages.SelectLocation },
      { name: 'dashboard', path: 'dashboard', component: pages.Dashboard, onEnter: requireLocation(store) },
      { name: 'faq', path: 'faq', component: pages.FAQPage },
      { name: 'about', path: 'about', component: pages.AboutPage },
      { name: 'task', path: 'tasks/:taskId', component: pages.TaskPage, onEnter: requireLocation(store) },
      { name: 'causes', path: 'causes', component: pages.CauseListPage },
      { name: 'cause', path: 'causes/:causeName', component: pages.CausePageContainer },
      { name: 'causeTasks', path: 'causes/:causeName/tasks', component: pages.CauseTasksPage, onEnter: requireLocation(store) },
      { name: 'causeTask', path: 'causes/:causeName/tasks/:taskId', component: pages.TaskPage, onEnter: requireLocation(store) },
    ],
  };
}

export default (store: any) => {
  return siteRoutes(store);
};
