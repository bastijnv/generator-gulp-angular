'use strict';
var path = require('path');
require('./src/files')(GulpAngularGenerator);
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.prompting = function askFor() {
  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'moduleName',
    message: 'What module name would you like to use?',
    default: self.appName + '.' + self.name,
    when: function() {return self.config.get('modulePrompt');}
  }, {
    name: 'dir',
    message: 'Where would you like to create this controller?',
    default: this.props.paths.src
  }];

  this.prompt(prompts, function (props) {
    self.appName = props.moduleName || self.appName;
    self.dir = path.join(props.dir, self.name);
    done();
  });
};

Generator.prototype.writing = function createFiles() {
  ngUtil.copyTemplates(this, 'controller');
};
