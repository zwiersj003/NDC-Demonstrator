import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Modules = Loadable({
  loader: () => import('./views/Ndc/Modules/Modules'),
  loading: Loading,
});

const Questionlist = Loadable({
  loader: () => import('./views/Ndc/Questionlist/Questionlist'),
  loading: Loading,
});

const Participant = Loadable({
  loader: () => import('./views/Ndc/Participant/Participant'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./views/Ndc/Home/Home'),
  loading: Loading,
});

const Report = Loadable({
  loader: () => import('./views/Ndc/Report/Report'),
  loading: Loading,
});

const Result = Loadable({
  loader: () => import('./views/Ndc/Report/Results'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/modules', exact: true,  name: 'Modules', component: Modules },
  { path: '/modules/deelnemers/:id/vragenlijst/:lijst', exact: true,  name: 'Vragenlijst', component: Questionlist },
  { path: '/home', exact: true,  name: 'Home', component: Home },
  { path: '/modules/:id/deelnemers', exact: true, name: 'Deelnemers', component: Participant },
  { path: '/rapportage', exact: true,  name: 'Rapportage', component: Report },
  { path: '/rapportage/resultaat', exact: true, name: 'Resultaat', component: Result },
];

export default routes;
