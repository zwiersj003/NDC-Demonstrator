import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Modules = Loadable({
  loader: () => import('./views/Ndc/Modules/Modules'),
  loading: Loading,
});

const Vragenlijst = Loadable({
  loader: () => import('./views/Ndc/Vragenlijst/Vragenlijstv2'),
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
  { path: '/modules', exact: true,  name: 'Modules', component: Modules },
  { path: '/modules/deelnemers/:id/vragenlijst/:lijst', exact: true,  name: 'Vragenlijst', component: Vragenlijst },
  { path: '/home', exact: true,  name: 'Home', component: Home },
  { path: '/modules/:id/deelnemers', exact: true,  name: 'Deelnemers', component: Deelnemer },
  { path: '/rapportage', exact: true,  name: 'Rapportage', component: Rapportage },
];

export default routes;
