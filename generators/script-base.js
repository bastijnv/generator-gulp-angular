'use strict';
var util = require('util');
var path = require('path');
var lodash = require('lodash');
var s = require('underscore.string');
var yeoman = require('yeoman-generator');
var ngUtil = require('./util.js');

// extend lodash with underscore.string
lodash.mixin(s.exports());

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.lodash = lodash;

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = lodash.slugify(lodash.humanize(this.appname));
  this.scriptAppName = this.config.get('moduleName') || lodash.camelize(this.appname);

  this.cameledName = lodash.camelize(this.name);
  this.classedName = lodash.classify(this.name);

  this.hasFilter = function(filter) {
    return this.config.get('filters').indexOf(filter) !== -1;
  }.bind(this);

  // dynamic assertion statements
  this.expect = function() {
    return this.hasFilter('expect') ? 'expect(' : '';
  }.bind(this);
  this.to = function() {
    return this.hasFilter('expect') ? ').to' : '.should';
  }.bind(this);

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  this.sourceRoot(path.join(__dirname, '/templates'));

  this.props = require(path.join(process.cwd(), '.yo-rc.json'))['generator-gulp-angular'];

  this.options.filters = [this.props.props.router.key, 'jasmine'];
  this.options.extensions = [
    this.props.props.cssPreprocessor.extension,
    this.props.props.jsPreprocessor.extension,
    this.props.props.htmlPreprocessor.extension
  ];

/*  this.options.directiveSimple = path.join(__dirname, '/templates' ,'/directiveSimple');
  this.options.directiveComplex = path.join(__dirname, '/templates' ,'/directiveComplex');
  this.options.filter = path.join(__dirname, '/templates' ,'/filter');
  this.options.service = path.join(__dirname, '/templates' ,'/ervice');
  this.options.factory = path.join(__dirname, '/templates' ,'/factory');
  this.options.controller = path.join(__dirname, '/templates' ,'/controller');
  this.options.decorator = path.join(__dirname, '/templates' ,'/decorator');
  this.options.provider = path.join(__dirname, '/templates' ,'/provider');
  this.options.route = path.join(__dirname, '/templates' ,'/route');*/

  var config = {
    'routeDirectory': this.options.routeDirectory || 'src/app/components/routes/',
    'directiveDirectory': this.options.directiveDirectory || 'src/app/components/directives/',
    'filterDirectory': this.options.filterDirectory || 'src/app/components/filters/',
    'serviceDirectory': this.options.serviceDirectory || 'src/app/components/services/',
    'basePath': this.options.basePath || 'src/app',
    'moduleName': this.options.moduleName || '',
    'modulePrompt':
      this.options.hasOwnProperty('modulePrompt') ?
      this.options.modulePrompt : true,
    'filters': this.options.filters || ['ui-router', 'jasmine'],
    'extensions': this.options.extensions || ['ts', 'html', 'scss'],
    'directiveSimpleTemplates': this.options.directiveSimple || '',
    'directiveComplexTemplates': this.options.directiveComplex || '',
    'filterTemplates': this.options.filter || '',
    'serviceTemplates': this.options.service || '',
    'factoryTemplates': this.options.factory || '',
    'controllerTemplates': this.options.controller || '',
    'decoratorTemplates': this.options.decorator || '',
    'providerTemplates': this.options.provider || '',
    'routeTemplates': this.options.route || ''
  };

  this.config.defaults(config);
};

util.inherits(Generator, yeoman.generators.NamedBase);
