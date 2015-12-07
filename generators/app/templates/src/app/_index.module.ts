/// <reference path="../../<%- props.paths.tmp %>/typings/tsd.d.ts" />

import { config } from './index.config';
<% if (props.router.key === 'new-router') { -%>
import { routerConfig, RouterController } from './index.route';
<% } else if (props.router.key !== 'noRouter') { -%>
import { routerConfig } from './index.route';
<% } -%>
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from './components/factories/githubContributor/githubContributor.service';
import { WebDevTecService } from './components/services/webDevTec/webDevTec.service';
import { acmeNavbar } from './components/directives/navbar/navbar.directive';
import { acmeMalarkey } from './components/directives/malarkey/malarkey.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module <%- appName %> {
  'use strict';

  angular.module('<%- appName %>', [<%- modulesDependencies %>])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
<% if (props.router.key !== 'noRouter') { -%>
    .config(routerConfig)
<% } -%>
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
<% if (props.router.key === 'new-router') { -%>
    .controller('RouterController', RouterController)
<% } -%>
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);
}
