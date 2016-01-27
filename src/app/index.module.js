/* global malarkey:false, moment:false */

import {config} from './index.config.js';
import {routerConfig, RouterController} from './index.route.js';
import {runBlock} from './index.run.js';
import {MainController} from './main/main.controller.js';
import {GithubContributorService} from './components/githubContributor/githubContributor.service.js';
import {WebDevTecService} from './components/webDevTec/webDevTec.service.js';
import {NavbarDirective} from './components/navbar/navbar.directive.js';
import {MalarkeyDirective} from './components/malarkey/malarkey.directive.js';



angular.module('nextGenPoc', ['ngNewRouter', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributorService)
    .service('webDevTec', WebDevTecService)
    .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .directive('acmeNavbar', NavbarDirective)
    .directive('acmeMalarkey', MalarkeyDirective);
