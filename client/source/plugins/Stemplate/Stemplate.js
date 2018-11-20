
let routes = require('./routes.js');

module.exports = {
    name: 'Stemplate',
    tree: require('./tree.js'),
    actions: [
        require('./actions/getLanguage'),
        require('./actions/logIn'),
        require('./actions/getDataEx'),
        require('./actions/getConfiguration'),
        require('./actions/loadSettings'),
    ],
    modules: [
        require('./modules/Mixin'),

        require('./modules/Helper'),
        require('./modules/rules'),

        require('./modules/dataModels/DataModelsEntry'),
        require('./modules/dataModels/constructors/Basic'),
        require('./modules/dataModels/constructors/ExtandBasic'),
    ],
    components: [
        require('./components/Component'), 
    ],
    views: [
        require('./views/Root'),
        require('./views/Home'),
        require('./views/Prices'),
    ],

    init(definition, done) {

        core.router.config({ 
            routes,
            defaultRoute: '/home'
        });

        var _simpleOptions = {
            BaseApi: 'http://some.ip.for/api',
            getInitialFiles: (callback) => {
                core.plugins.Stemplate.run('loadSettings').then((data) => {
                    let { config, menu } = data;

                    // if (menu) {
                    //     core.plugins.Stemplate.set(['fileMenu'], menu)
                    // }

                    if (config) {
                        core.plugins.Stemplate.set(['config'], config);
                        for (let x in config) {
                            core.plugins.access.set([x], config[x])
                        }
                        if (callback) callback()
                    } else if (callback) callback()
                })
            },
        };
        

        done(_simpleOptions);
    }
};
