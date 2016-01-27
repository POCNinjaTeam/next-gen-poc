'use strict';


export function routerConfig($componentLoaderProvider) {
    'ngInject';

    $componentLoaderProvider.setTemplateMapping(function (name) {
        return `/${ name }/${ name }.html`;
    });
}



export class RouterController {
    constructor($router) {
        'ngInject';

        $router.config([
            {
                path: '/',
                component: 'main'
            }
        ]);
    }
}