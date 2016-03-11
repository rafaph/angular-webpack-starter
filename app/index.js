import angular from 'angular';
import Shared from './shared';
import AppComponent from './app.component';

angular.module('app', [
    Shared.name
  ])
  .component('app', AppComponent);
