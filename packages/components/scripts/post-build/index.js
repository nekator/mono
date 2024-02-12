const Vue = require('./vue');
const WebComponents = require('./web-components');
const Angular = require('./angular');
const React = require('./react');
const Lit = require('./lit');
const CopyFiles = require('./copy-files');

CopyFiles();
Vue();
Angular();
Lit();
React();
WebComponents();
