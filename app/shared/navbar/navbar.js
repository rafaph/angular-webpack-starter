import angular from 'angular';
import ngAnimate from 'angular-animate';
import collapseUi from 'angular-ui-bootstrap/src/collapse';
import dropdownUi from 'angular-ui-bootstrap/src/dropdown';
import navbarComponent from './navbar.component';

export default angular.module('navbar', [
    ngAnimate,
    dropdownUi,
    collapseUi
  ])
  .component('navbar', navbarComponent)
