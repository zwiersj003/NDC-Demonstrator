import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});

const Modules = Loadable({
  loader: () => import('./views/Ndc/Modules/Modules'),
  loading: Loading,
});

const Vragenlijst = Loadable({
  loader: () => import('./views/Ndc/Vragenlijst/Vragenlijst'),
  loading: Loading,
});

const Deelnemer = Loadable({
  loader: () => import('./views/Ndc/Deelnemer/Deelnemer'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./views/Ndc/Home/Home'),
  loading: Loading,
});

const Rapportage = Loadable({
  loader: () => import('./views/Ndc/Rapportage/Rapportage'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/modules', exact: true,  name: 'Modules', component: Modules },
  { path: '/modules/deelnemers/vragenlijst', exact: true,  name: 'Vragenlijst', component: Vragenlijst },
  { path: '/home', exact: true,  name: '', component: Home },
  { path: '/modules/:id/deelnemers', exact: true,  name: 'Deelnemers', component: Deelnemer },
  { path: '/rapportage', exact: true,  name: 'Rapportage', component: Rapportage },
];

export default routes;
